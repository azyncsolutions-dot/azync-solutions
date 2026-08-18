import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

const dynamicRoutes = [
  '/',
  '/about',
  '/services',
  '/portfolio',
  '/reviews',
  '/blog',
  '/contact',
  '/hire-us'
];

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://azyncsolutions.com',
      dynamicRoutes,
    }),
  ],
})
