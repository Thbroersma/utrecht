import { addons } from '@storybook/addons';
import customTheme from './customTheme';

addons.setConfig({
  theme: customTheme,
  sidebar: {
    collapsedRoots: ['semantic-html', 'onderzoek', 'molecules'],
  },
});
