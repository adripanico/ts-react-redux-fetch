import react from '@vitejs/plugin-react';
import path from 'path';
import { terser } from 'rollup-plugin-terser';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: `/ts-react-redux-fetch/`,
  plugins: [react()],
  resolve: {
    alias: {
      app: path.resolve(__dirname, './src/app'),
      components: path.resolve(__dirname, './src/components'),
      context: path.resolve(__dirname, './src/context'),
      hooks: path.resolve(__dirname, './src/hooks'),
      http: path.resolve(__dirname, './src/http'),
      models: path.resolve(__dirname, './src/models'),
      shared: path.resolve(__dirname, './src/shared'),
      store: path.resolve(__dirname, './src/store'),
      styles: path.resolve(__dirname, './src/styles'),
      utils: path.resolve(__dirname, './src/utils'),
    },
  },
  build: {
    minify: 'terser',
    rollupOptions: {
      plugins: [
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        terser({
          format: {
            comments: false,
          },
          mangle: {
            keep_classnames: false,
            reserved: [],
          },
        }),
      ],
    },
  },
});
