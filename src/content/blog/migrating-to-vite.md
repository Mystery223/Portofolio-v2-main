---
title: "Migrating to Vite: Faster and Smarter"
date: "Feb 08, 2026"
desc: "How I migrated this portfolio from Vue CLI to Vite for a better developer experience."
image: "https://vitejs.dev/logo-with-shadow.png"
slug: "migrating-to-vite"
---

# Migrating to Vite

In this article, I want to share my experience of migrating this portfolio from **Vue CLI** (Webpack) to **Vite**.

## Why Vite?

Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:
- A dev server that serves your source files over native ES modules, with rich built-in features and astonishingly fast Hot Module Replacement (HMR).
- A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

## The Process

1. **Uninstall Vue CLI Dependencies**: Removing `@vue/cli-service` and related plugins.
2. **Install Vite**: Adding `vite` and `@vitejs/plugin-vue`.
3. **Configure `vite.config.js`**:
```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```
4. **Update `index.html`**: Moving it to the root and adding `<script type="module" src="/src/main.js"></script>`.

## Conclusion

The difference is night and day. The dev server starts in milliseconds, and the build process is significantly faster. If you're still using Webpack for Vue 3 projects, I highly recommend making the switch!
