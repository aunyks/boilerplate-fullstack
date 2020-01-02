# Full Stack Quickstart

`(yarn || npm run) dev` runs for dev.  
`(yarn || npm run) build` builds for prod.  
`(yarn || npm run) start` runs for prod.  

`now`-compatible out of the box!

## Envar Config
To set these environment variables, create a `.env` and `.env.dev` file. The `.env` will contain production variables, and the `.env.dev` will contain development variables.  

Fill these files using the following form:
```
A_VARIABLE=Its value
ARE_THE_VALUES_STRINGS=yes
```

#### Dev Settings
```
NODE_ENV
```
`production` if in production, anything else for other environments.  

#### Human Messaging Settings
**Email**
```
SENGRID_API_KEY
```
Your Sendgrid developer API key. Required to send emails.  

```
EMAIL_FROM
```
The *default* email from which all emails will be sent.  

**SMS**
```
TWILIO_ACCT_SID
```
Your Twilio account SID.  

```
TWILIO_AUTH_TOKEN
```
Your Twilio Auth Token.  

```
TWILIO_NUMBER
```
The *default* Twilio number from which all messages will be sent.

#### Database Management Settings
```
DB_CONNECTION_STRING
```
The connection string for your SQL database.

#### App Metadata Information
```
SHORT_APP_NAME
```
The short name of this application.  

```
LONG_APP_NAME
```
The full name of this application.  

```
APP_DESCRIPTION
```
A variably sized description of the app.  

```
APP_SLOGAN
```
Self-explanatory.  

```
APP_PRIMARY_COLOR
```
The app's primary color in the form `abcdef` where each digit is a hex digit.  

```
APP_AUTHOR
```
Who built this? Will be in the copyright footer.  
```
TWITTER_USERNAME
```
The Twitter username of the page or app's author.  

```
APP_URL
```
The {http|https}://origin -formatted URL where this app lives.
