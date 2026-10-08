import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

const dynamicRoutes = [
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

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://www.azyncsolutions.com',
      dynamicRoutes,
    }),
  ],
})
