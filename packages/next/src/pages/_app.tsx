import Head from 'next/head';
import theme from '@tarot-viii/ui/src/theme';
import { AppProps } from 'next/app';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import 'setimmediate';


export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Example</title>
                <meta key="title" name="title" content="Example" />
                <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
                <meta
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
                    name="viewport"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <SafeAreaProvider>
                    <Component {...pageProps} />
                </SafeAreaProvider>
            </ThemeProvider>
        </>
    );
}
