import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addParameters, addDecorator } from '@storybook/react';
import './storybook.css';
import GlobalStyles from '../src/GlobalStyles';

addDecorator((s) => (
  <>
    <GlobalStyles />
    {s()}
  </>
));

addParameters({
  background: { name: 'alabaster', value: '#F6F8F7' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
