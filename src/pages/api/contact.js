// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  require('dotenv').config()
  
  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    service: "Office365",
    sendMail: true,
    host: "smtp.office365.com",
    port: 587,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
    secure: false,
    tls: {
      ciphers: 'SSLv3'
    }
  })
  const mailData = {
    from: req.body.email,
    to: process.env.user,
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.name} <br/> <br/> ${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200).json({status: 'Ok'})
}
