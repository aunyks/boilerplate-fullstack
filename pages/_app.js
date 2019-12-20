import React from 'react';
import App from 'next/app';
import { withNextIntlSetup } from '@moxy/next-intl';
import nextIntlConfig from '../intl';

export default withNextIntlSetup(nextIntlConfig)(App);