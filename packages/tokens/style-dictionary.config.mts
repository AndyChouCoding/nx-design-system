import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary({
  source: ['token-sources/**/*.json'],
  platforms: {
    // JavaScript — 供 TypeScript 專案 import 使用
    js: {
      transformGroup: 'js',
      buildPath: 'src/generated/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6',
        },
        {
          destination: 'tokens.d.ts',
          format: 'typescript/es6-declarations',
        },
      ],
    },
    // CSS Variables — 供 Tailwind / 純 CSS 專案使用
    css: {
      transformGroup: 'css',
      buildPath: 'src/generated/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            selector: ':root',
          },
        },
      ],
    },
  },
});

await sd.buildAllPlatforms();
