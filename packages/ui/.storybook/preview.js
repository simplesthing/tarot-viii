import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import theme  from '../src/theme'

export const decorators = [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ];