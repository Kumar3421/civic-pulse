import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false,
    // Ensure the hash is consistent for verification
    rollupOptions: {
      output: {
      }
    }
  }
})
