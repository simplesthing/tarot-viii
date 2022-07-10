import '../../styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import theme from '@tarot-viii/ui/src/theme';

export default function App({ Component, pageProps }: AppProps) {
    console.log(theme);
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

            <Component {...pageProps} />
        </>
    );
}
