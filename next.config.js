const { resolve } = require('path')
const withNextIntl = require('@moxy/next-intl/plugin')
const dev = process.env.NODE_ENV !== 'production'
require('dotenv').config({
  path: resolve(process.cwd(), dev ? '.env.dev' : '.env')
})

module.exports = withNextIntl()({
  env: {
    SHORT_APP_NAME: process.env.SHORT_APP_NAME,
    APP_DESCRIPTION: process.env.APP_DESCRIPTION,
    APP_PRIMARY_COLOR: process.env.APP_PRIMARY_COLOR,
    APP_AUTHOR: process.env.APP_AUTHOR,
    APP_URL: process.env.APP_URL,
    TWITTER_USERNAME: process.env.TWITTER_USERNAME,
  }
})