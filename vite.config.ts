import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    root: process.cwd(),
    base: '/dist/',
    build: {
      outDir: path.resolve(__dirname, 'web/dist'),
      manifest: true,
      manifestDir: '.',
      emptyOutDir: true,
      sourcemap: !isProduction,
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'src/js/index.ts'),
          style: path.resolve(__dirname, 'src/sass/index.scss'),
        },
        output: {
          entryFileNames: isProduction ? 'js/[name].[hash].js' : 'js/[name].js',
          chunkFileNames: isProduction ? 'js/[name].[hash].js' : 'js/[name].js',
          assetFileNames: isProduction ? '[ext]/[name].[hash].[ext]' : '[ext]/[name].[ext]',
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "base/variables";`,
          includePaths: [path.resolve(__dirname, 'src/sass')],
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
});

console.log('Vite build outDir:', path.resolve(__dirname, 'web/dist'));