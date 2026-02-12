import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        if (id.includes('highlight.js')) {
                            return 'vendor-hljs';
                        }
                        if (id.includes('marked')) {
                            return 'vendor-marked';
                        }
                        return 'vendor';
                    }
                }
            }
        }
    }
})
