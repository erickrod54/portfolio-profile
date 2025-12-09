import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    basicSsl()
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
    https:true
  },
  build: {
    outDir: "build"
  }
});

