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

  // 2. Launch browser using system Edge or Chrome
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const executablePath = fs.existsSync(chromePath) ? chromePath : edgePath;

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
}

prerender().catch((err) => {
  console.error('❌ Prerendering error:', err);
  process.exit(1);
});
