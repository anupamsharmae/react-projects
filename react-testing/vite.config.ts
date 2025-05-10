import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'vite.setup.ts',

    // ✅ Only run test files in the __tests__/routes/tags folder
    include: ['src/__tests__/**'],

    // ✅ Avoid unnecessary folders
    exclude: ['node_modules', 'dist'],

    // ✅ Only collect coverage for files imported during tests
    all: false,

    coverage: {
      reporter: ['text', 'json', 'html'],

      // ✅ Only include source files under src/routes/tags for coverage
      include: ['src/**'],

      // ✅ Optionally exclude utility files, barrel files, etc.
      exclude: ['**/*.d.ts', '**/index.ts']
    }
  }
} as UserConfig)
