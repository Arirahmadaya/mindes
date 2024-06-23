import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Direktori output default
    sourcemap: true, // Opsional: membantu debugging
  },
  server: {
    port: 3000, // Anda bisa menentukan port yang ingin digunakan untuk pengembangan
  },
  resolve: {
    alias: {
      '@': '/src', // Alias berguna untuk menghindari path relatif yang panjang
    },
  },
  base: process.env.NODE_ENV === 'production' ? '/' : '/', // URL dasar
});
