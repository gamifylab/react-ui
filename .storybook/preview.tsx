import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/i18n';
import React, { Suspense, useEffect } from 'react';

const withI18next = (Story, context) => {
  const { locale } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};

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
