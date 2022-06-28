import { ThemeProvider, createTheme } from '@rneui/themed';

import AppEntry from './src/navigation/app-entry';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import colors from '@tarot-viii/ui/src/theme/colors';
import { enableScreens } from 'react-native-screens';

enableScreens(true);

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <SafeAreaProvider>
                <AppEntry />
            </SafeAreaProvider>
        </ThemeProvider>
    );
}

const theme = createTheme({
    lightColors: {
        background: colors.spanish_gray.base,
        primary: colors.smoky_black.base,
        secondary: '#fff',
        white: colors.spanish_white.base,
        black: colors.smoky_black.base,
        grey0: colors.silver_sand.light,
        grey1: colors.silver_sand.base,
        grey2: colors.silver_sand.muted,
        grey3: colors.spanish_gray.muted,
        grey4: colors.spanish_gray.base,
        grey5: colors.spanish_gray.shadow,
        greyOutline: colors.silver_sand.muted,
        searchBg: colors.spanish_gray.light,
        success: colors.medium_aquamarine.base,
        warning: colors.lemon.base,
        error: colors.electric_orange.base
    }
});
