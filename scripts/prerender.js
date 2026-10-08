import express from 'express';
import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

const routes = [
  '/',
  '/riley',
  '/about',
  '/services',
  '/portfolio',
  '/reviews',
  '/blog',
  '/contact',
  '/hire-us',
  '/privacy',
  '/terms'
];

async function prerender() {
  console.log('🚀 Starting Static Site Prerendering...');

  if (!fs.existsSync(distDir)) {
    console.error('❌ dist/ directory does not exist. Run "npm run build" first.');
    process.exit(1);
  }

  // 1. Start static server
  const app = express();
  app.use(express.static(distDir));
  app.use((req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });

  const server = await new Promise((resolve) => {
    const s = app.listen(4567, () => {
      console.log('🌐 Local preview server running on http://localhost:4567');
      resolve(s);
    });
  });

  // 2. Locate browser executable or fallback
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const linuxChromePath = '/usr/bin/google-chrome';
  const linuxChromiumPath = '/usr/bin/chromium-browser';

  let executablePath = null;
  if (fs.existsSync(chromePath)) executablePath = chromePath;
  else if (fs.existsSync(edgePath)) executablePath = edgePath;
  else if (fs.existsSync(linuxChromePath)) executablePath = linuxChromePath;
  else if (fs.existsSync(linuxChromiumPath)) executablePath = linuxChromiumPath;

  if (!executablePath) {
    console.warn('⚠️ No local Chrome/Edge executable found on this environment. Generating route folder fallbacks from dist/index.html for deployment...');
    const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
    for (const route of routes) {
      if (route === '/') continue;
      const routeDir = path.join(distDir, route.substring(1));
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      fs.writeFileSync(path.join(routeDir, 'index.html'), baseHtml, 'utf8');
    }
    server.close();
    console.log('✅ Route fallbacks created successfully for deployment!');
    return;
  }

  try {
    console.log(`🌐 Launching browser (${executablePath})...`);
    const browser = await puppeteer.launch({
      executablePath,
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    for (const route of routes) {
      const targetUrl = `http://localhost:4567${route}`;
      console.log(`📄 Prerendering ${route}...`);

      await page.goto(targetUrl, { waitUntil: 'networkidle0', timeout: 30000 });
      
      // Give Helmet & dynamic renders a moment to settle
      await page.evaluate(() => new Promise(r => setTimeout(r, 500)));

      const html = await page.content();

      // Determine output file path
      let filePath;
      if (route === '/') {
        filePath = path.join(distDir, 'index.html');
      } else {
        const routeDir = path.join(distDir, route.substring(1));
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        filePath = path.join(routeDir, 'index.html');
      }

      fs.writeFileSync(filePath, html, 'utf8');
      console.log(`  └─ Saved ${filePath}`);
    }

    await browser.close();
    server.close();
    console.log('✅ Prerendering completed successfully for all routes!');
  } catch (err) {
    console.warn('⚠️ Prerendering error encountered, falling back to static index.html routes:', err.message);
    const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
    for (const route of routes) {
      if (route === '/') continue;
      const routeDir = path.join(distDir, route.substring(1));
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      fs.writeFileSync(path.join(routeDir, 'index.html'), baseHtml, 'utf8');
    }
    server.close();
    console.log('✅ Route fallbacks created successfully!');
  }
}

prerender().catch((err) => {
  console.error('❌ Prerendering critical failure:', err);
  process.exit(0);
});
