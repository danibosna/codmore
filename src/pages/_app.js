import Head from 'next/head';
// import Script from 'next/script';
import { ProviderAuth } from '@hooks/useAuth';
import MainLayout from '@layout/MainLayout';
import Nav from '@common/Nav';
import Header from '@common/Header';
// import { GA_TRACKING_ID } from '@utils/gtag';
import '@styles/tailwind.css';

function MyApp({ Component, pageProps, titleHead, descriptionHead }) {
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
      <ProviderAuth>
        <Header />
        <Nav />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ProviderAuth>
    </>
  );
}
MyApp.defaultProps = {
  titleHead: 'Codmore',
  descriptionHead: 'Software Technologies',
};

export default MyApp;
