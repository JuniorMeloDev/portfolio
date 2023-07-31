'use client'

import React, { useState, useEffect } from 'react'
import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {

  const [hidratacao, sethidratacao] = useState(false);
  useEffect(() => {
    sethidratacao(true);
  }, []);

  if (!hidratacao) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <>
        <Head>
          <title>Junior Melo Dev</title>
        </Head>
        <Header />
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp

