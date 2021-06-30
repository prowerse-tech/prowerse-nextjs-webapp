// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  require('dotenv').config()
  
  const nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secureConnection: false,
    auth: {
      user: 'niraj.paghadar@prowerse.com',
      pass: process.env.pass,
    },
    tls: {
      ciphers: 'SSLv3'
    }
  })
  const mailData = {
    from: req.body.email,
    to: 'niraj.paghadar@prowerse.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200)
}
