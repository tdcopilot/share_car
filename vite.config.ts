import basicSsl from '@vitejs/plugin-basic-ssl';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import * as path from 'node:path';
import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    basicSsl({
      /** name of certification */
      name: 'tdcopilot',
      /** custom trust domains */
      domains: ['*.tdcloud.cc'],
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.ts'],
  },
  server: {
    host: 'tdcopilot.car.tdcloud.cc',
    port: 443,
    open: '/',
  },
});
