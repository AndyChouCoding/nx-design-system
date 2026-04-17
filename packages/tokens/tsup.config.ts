import { defineConfig } from 'tsup';
import { copyFileSync, mkdirSync } from 'fs';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  sourcemap: true,
  treeshake: true,
  onSuccess: async () => {
    // Copy Style Dictionary CSS output to dist
    mkdirSync('dist', { recursive: true });
    copyFileSync('src/generated/variables.css', 'dist/variables.css');
    console.log('✔︎ dist/variables.css');
  },
});
