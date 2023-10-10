// .storybook/preview.js
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import '../src/styles.scss';

/* snipped for brevity */

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
];
