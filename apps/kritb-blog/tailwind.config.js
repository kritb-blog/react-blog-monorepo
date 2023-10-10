const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const themeTailwind = require('../../ui/tailwind.config');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [themeTailwind],
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
