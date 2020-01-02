const sendgrid = require('@sendgrid/mail')
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const EMAIL_FROM = process.env.EMAIL_FROM
sendgrid.setApiKey(SENDGRID_API_KEY)

// those verification links should never be derived from ANY user input
const emailType = {
  CHANGE_EMAIL: {
    html: ({ verificationLink }) => {
      return `
        <p>Hey there!</p>
        <p>To confirm the change of email on your profile, please visit ${verificationLink} in your browser.</p>
        <p>Thank you</p>
      `
    },
    text: ({ verificationLink }) => {
      return `
        Hey there!
        \n\n
        To confirm the change of email on your profile, please visit ${verificationLink} in your browser.
        \n\n
        Thank you
      `
    }
  },
  CONFIRM_SIGNUP: {
    html: ({ verificationLink }) => {
      return `
        <p>Hey there!</p>
        <p>To confirm your registration, please visit ${verificationLink} in your browser.</p>
        <p>Thank you</p>
      `
    },
    text: ({ verificationLink }) => {
      return `
        Hey there!
        \n\n
        To confirm your registration, please visit ${verificationLink} in your browser.
        \n\n
        Thank you
      `
    }
  }
}

const sendEmail = (to, subject, template, templateData) => {
  const {
    html,
    text
  } = emailType[template]
  const msg = {
    to: to,
    from: EMAIL_FROM,
    subject: subject,
    text: text(templateData),
    html: html(templateData),
  }
  sendgrid.send(msg)
}

module.exports = {
  sendEmail
}