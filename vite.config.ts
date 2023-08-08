import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ts-react-redux-fetch/',
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      http: path.resolve(__dirname, './src/http'),
      models: path.resolve(__dirname, './src/models'),
      store: path.resolve(__dirname, './src/store'),
    },
  },
});
