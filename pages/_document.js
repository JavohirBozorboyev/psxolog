/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";


const APP_NAME = 'Dr.Dilshod'


export default function Document() {
  return (
    <Html>
      <Head>
        <title>Dr.DILSHOD</title>
        <meta name="google-site-verification" content="YdTGqUbXk4DeqcWzM2myF_6NvEQaXprX-cQCWr-kV_4" />
        <meta name='application-name' content={APP_NAME} />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content={APP_NAME} />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='theme-color' content='#FFFFFF' />
        {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}
        {/* <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' /> */}

        <link rel='apple-touch-icon' sizes='180x180' href='/favicon1.png' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='shortcut icon' href='/favicon1.png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
