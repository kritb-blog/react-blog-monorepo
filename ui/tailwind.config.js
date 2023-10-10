const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        meteorite: {
          50: '#f6f4fe',
          100: '#edebfc',
          200: '#ded9fb',
          300: '#c5baf8',
          400: '#a893f2',
          500: '#8a67eb',
          600: '#7a47e0',
          700: '#6b35cc',
          800: '#592cab',
          900: '#4b268c',
          950: '#391c77',
        },
      },
    },
  },
  plugins: [],
};
