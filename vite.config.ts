import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    APLAYER_VERSION: JSON.stringify(await import('./package.json').then((pkg) => pkg.version)),
  },
  resolve: {
    alias: {
      utils: path.resolve(__dirname, 'utils'),
      '@moefe/vue-audio': path.resolve(__dirname, 'packages/@moefe/vue-audio'),
      '@moefe/vue-store': path.resolve(__dirname, 'packages/@moefe/vue-store'),
      '@moefe/vue-touch': path.resolve(__dirname, 'packages/@moefe/vue-touch'),
      '@moefe/vue-aplayer': path.resolve(__dirname, 'packages/@moefe/vue-aplayer'),
    },
  },
})
