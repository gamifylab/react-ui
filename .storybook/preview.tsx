import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { withI18next } from './decorators/i18n';

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'pt', title: 'Portuguese' },
      ],
      showName: true,
    },
  },
};

const preview: Preview = {
  decorators: [withI18next],
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on[A-Z].*' },
    docs: {
      theme: themes.dark,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};


export default preview;
export const decorators = [withI18next];
