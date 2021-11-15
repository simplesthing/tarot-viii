import AppEntry from './src/navigation/app-entry';
import React from 'react';
import theme from '@tarot-viii/ui/src/theme';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
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
