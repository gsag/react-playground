import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
    root: 'src',
    envDir: '../',
    envPrefix: 'CFG_',
    build: {
        outDir: '../dist',
    },
    plugins: [tsconfigPaths(), react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['__tests__/setup.ts'],
        coverage: {
            reporter: ['text', 'json', 'html'],
            exclude: ['node_modules/'],
        },
        browser: {
            enabled: true,
            name: 'chromium',
            provider: 'playwright',
        },
    },
})
