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
    from: process.env.user,
    to: process.env.receiver,
    subject: `Message From ${req.body.name}`,
    html: `<div> Hello Team, <br/> Following inquiry has been received on Prowerse.com <br/> <br/> Name : ${req.body.name} <br/> E-mail : ${req.body.email} <br/> Message : ${req.body.message}</div>`
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200).json({status: 'Ok'})
}