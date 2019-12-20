import { cookiePolicy, acceptLanguagePolicy, defaultPolicy } from '@moxy/next-intl';

export default {
  locales: [
    {
      id: 'en-US',
      name: 'American English',
      loadMessages: async () => {
        const module = await import('./messages/en-US.json')
        return module.default
      },
    },
    {
      id: 'es-ES',
      name: 'Spanish Spanish',
      loadMessages: async () => {
        const module = await import('./messages/es-ES.json')
        return module.default
      },
    },
  ],
  policies: [
    cookiePolicy(),
    acceptLanguagePolicy(),
    defaultPolicy('en-US'),
  ],
}