import React from 'react';
import Head from 'next/head';
import ContactContainer from '@components/ContactContainer';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Software Technologies" />
      </Head>
      <ContactContainer />
    </>
  );
}
