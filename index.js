'use strict'
require('dotenv').config();
const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  return JSON.stringify(event.email);
  // let transporter = nodemailer.createTransport({
  //   host: process.env.SMTP_SERVER,
  //   port: 587,
  //   secure: false, // true for 465, false for other ports
  //   auth: {
  //     user: process.env.USER, // generated ethereal user
  //     pass: process.env.PASSWORD, // generated ethereal password
  //   },
  // });

  // // send mail with defined transport object
  // let info = await transporter.sendMail({
  //   from: `"👻" <${process.env.USER}>`, // sender address
  //   to: event.email, // list of receivers
  //   subject: event.subject, // Subject line
  //   text: event.message, // plain text body
  //   html: `<b>${event.message}</b>`, // html body
  // });

  // console.log("Message sent: %s", info.messageId);
  // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

