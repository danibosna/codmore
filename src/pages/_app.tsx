import Head from 'next/head';
// import Script from 'next/script';
import { ProviderAuth } from '@hooks/useAuth';
import MainLayout from '@layout/MainLayout';
// import { GA_TRACKING_ID } from '@utils/gtag';
import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from '@utils/web3.config';
import { JSXElementConstructor } from 'react';
import { AppInitialProps } from 'next/app';
import '@styles/tailwind.css';
import Hero3D from '@components/Hero3D';

type AppProps = AppInitialProps & {
  Component: JSXElementConstructor<AppInitialProps>;
  titleHead: string;
  descriptionHead: string;
};

function MyApp({ Component, pageProps, titleHead, descriptionHead }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>{titleHead}</title>
        <meta name="description" content={descriptionHead} />
      </Head>
      {/* <Script async strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <Script
        async
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1" /> */}
      <Web3ReactProvider getLibrary={getLibrary}>
        <ProviderAuth>
          <Hero3D />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ProviderAuth>
      </Web3ReactProvider>
    </>
  );
}
MyApp.defaultProps = {
  titleHead: 'Codmore',
  descriptionHead: 'Software Technologies',
};

export default MyApp;
