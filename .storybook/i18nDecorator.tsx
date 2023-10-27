// .storybook/preview.js
import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/i18n';


const withI18next = (Story) => {
    return (
      <Suspense fallback={<div>loading translations...</div>}>
        <I18nextProvider i18n={i18n}>
          <Story />
        </I18nextProvider>
      </Suspense>
    );
  };

export const decorators = [withI18next];