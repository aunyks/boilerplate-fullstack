const emailNotification = async msg => {
  const sendgrid = require('@sendgrid/mail')
  const {
    SENDGRID_API_KEY,
    EMAIL_FROM,
  } = process.env
  sendgrid.setApiKey(SENDGRID_API_KEY)
  sendgrid.send({
    to: msg.to,
    from: msg.from || EMAIL_FROM,
    subject: msg.subject || `${SHORT_APP_NAME} Notification`,
    text: msg.body,
    html: msg.html,
  })
  return Promise.resolve(0)
}

const smsNotification = async msg => {
  const twilio = require('twilio')
  const {
    TWILIO_ACCT_SID,
    TWILIO_AUTH_TOKEN,
    TWILIO_NUMBER
  } = process.env
  const client = new twilio(
    TWILIO_ACCT_SID,
    TWILIO_AUTH_TOKEN
  )
  await client.messages.create({
    body: msg.body,
    to: msg.to,
    from: msg.from || TWILIO_NUMBER
  })
}


const notify = async (via, msg) => {
  switch (via) {
    case 'sms':
      await smsNotification(msg)
      break;
    case 'email':
      await emailNotification(msg)
      break;
    default:
      throw `Notification type "${via}" unknown`
      break;
  }
}

module.exports = {
  notify
}