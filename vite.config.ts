import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

import { APP_CONSTANTS } from './src/constants';

// https://vitejs.dev/config/
export default defineConfig({
  base: `/${APP_CONSTANTS.baseUrl}/`,
  plugins: [react()],
  resolve: {
    alias: {
      app: path.resolve(__dirname, './src/app'),
      components: path.resolve(__dirname, './src/components'),
      http: path.resolve(__dirname, './src/http'),
      models: path.resolve(__dirname, './src/models'),
      store: path.resolve(__dirname, './src/store'),
    },
  },
});
