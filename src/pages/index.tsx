import React from 'react';
import Head from 'next/head';
import Heading from 'layouts/components/Heading';

export default function Home() {
  return (
    <>
      <Head>
        <title>Codmore</title>
        <meta name="description" content="Software Technologies" />
      </Head>
      <Heading />
    </>
  );
}
