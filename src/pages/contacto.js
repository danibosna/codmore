import React from 'react';
import Head from 'next/head';
import ContactSect from '@components/ContactSect';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Software Technologies" />
      </Head>
      <ContactSect />
    </>
  );
}
