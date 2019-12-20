import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { NextIntlScript } from '@moxy/next-intl';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextIntlScript />
          <NextScript />
        </body>
      </Html>
    )
  }
}