import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias para el directorio src
    },
  },
  build: {
    outDir: 'dist', // Directorio de salida para el build
    assetsDir: '', // Directorio de assets (imágenes, CSS, etc.)
    sourcemap: true, // Generar sourcemaps
  },
});
