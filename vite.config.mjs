import fg from 'fast-glob';
import { defineConfig } from 'vite';
 
export default defineConfig({
  build: {
    outDir: 'assets',
    emptyOutDir: false,
    rollupOptions: {
      input: ['src/**/*.{tsx,ts,jsx,js}', 'src/**/*.css'],
      output: {
        dir: 'assets',
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      },
      plugins: [
        {
          name: 'glob-input',
          options(options) {
            const inputs = typeof options.input === 'string' ? [options.input] : options.input
 
            return Array.isArray(inputs)
              ? { ...options, input: inputs.flatMap((input) => fg.sync(input)) }
              : null
          },
        },
      ],
    },
  },
  plugins: [],
})