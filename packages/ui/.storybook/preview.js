import { ThemeProvider, createTheme } from '@rneui/themed';

import React from 'react';
import theme from '../src/theme'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={createTheme(theme)}>
      <Story />
    </ThemeProvider>
  ),
];

