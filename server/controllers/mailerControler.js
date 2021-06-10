const nodemailer = require('nodemailer')
const User = require('../models/user')

const sendMailer = async (req, res) => {
  const {phone, text, emailTo, emailFrom, prefix, patientName, id} = req.body;
  const carrentDoctor = await User.findById(id)
  await carrentDoctor.messages.push({
    patientName,
    emailFrom,
    prefix,
    phone,
    text,
  })
  await carrentDoctor.save()
  const message = {
    from: process.env.GMAIL_ACCOUNT,
    to: `${emailTo}`,
    subject: `Вам поступило сообщение от пациента по имени ${patientName}`,
    text: `Текст сообщения: ${text}, Номер телефона пациента: +${prefix}${phone}  🤓😨`,
    html: `
      <h1>Вам поступило сообщение от пациента по имени ${patientName}</h1>
      <p>Текст сообщения: <i>${text}</i>  🤓😨</p>
      <p>Номер телефона пациента: <i>${prefix}${phone}</i></p>
    `
  }

  const transporter = nodemailer.createTransport(
    {
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.GMAIL_ACCOUNT,
        pass: process.env.GMAIL_PASSWORD,
      }
    },
    {
      from: `Mailer Test ${emailFrom}`
    }
  )

  const mailer = message => {
    transporter.sendMail(message, (err, info) => {
      if(err) return console.log(err)
      console.log('Email sent: ', info)
    })
  }

  mailer(message) 
  return res.status(200).json(carrentDoctor)
}

module.exports = {
  sendMailer,
}
