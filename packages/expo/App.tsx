import AppEntry from './src/navigation/app-entry';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import { enableScreens } from 'react-native-screens';
import theme from '@tarot-viii/ui/src/theme';
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
