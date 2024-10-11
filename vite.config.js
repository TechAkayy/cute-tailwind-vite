//vite.config.js (or) vite.config.ts

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import VitePluginPg from './vite-plugin-pg.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePluginPg({
      dirs: {
        src: './src',
        pages: './pages',
      },
      output: {
        // outDir: 'tailwind_theme', // default is 'dist'
        cssDir: './', // could be './css', relative to outDir (default is 'dist')
        cssFilename: 'tailwind.css',
        cssWpFilename: 'tailwind_for_wp_editor.css',
        jsDir: './js', // Relative to outDir (default is 'dist')
        imgDir: './images', // Relative to outDir (default is 'dist')
      },
      // lib: process.env.LIB, // passed via package.json script commands
      // wp: process.env.WP, // passed via package.json script commands
      pagesWithEntries: [
        {
          page: './index.html',
          entry: './src/main.js',
        },
        {
          page: './blog.html',
          entry: './src/main.js',
        },
      ],
    }),
  ],

  build: {
    minify: false,
    cssMinify: false,
  },

  resolve: {
    alias: {
      /* Must be either an object, or an array of { find, replacement, customResolver } pairs. */
      /* Refer to: https://vitejs.dev/config/shared-options.html#resolve-alias */
      /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./src', import.meta.url)),
      '~~': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
  //...
})
