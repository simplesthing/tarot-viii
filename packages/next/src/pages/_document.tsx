import React from 'react';
import {
    default as NextDocument,
    Head,
    Html,
    Main,
    NextScript
    } from 'next/document';
import { getInitialProps } from '@expo/next-adapter/document';


class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

Document.getInitialProps = getInitialProps;

export default Document;
