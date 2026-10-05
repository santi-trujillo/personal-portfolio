import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Resolucion de rutas relativas
  build: {
    outDir: 'dist',
  },
});
