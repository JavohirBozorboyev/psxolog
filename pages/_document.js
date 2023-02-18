/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";


const APP_NAME = 'Dr.Dilshod'


export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Psixolog, Test, Blogs, Quiz,"
        />
        <meta name="google-site-verification" content="YdTGqUbXk4DeqcWzM2myF_6NvEQaXprX-cQCWr-kV_4" />
        <meta name='application-name' content={APP_NAME} />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content={APP_NAME} />
        <meta name='format-detection' content='telephone=yes' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='theme-color' content='#FFFFFF' />
        <link rel='apple-touch-icon' sizes='180x180' href='/favicon1.png' />
        <link rel='shortcut icon' href='/favicon1.png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
