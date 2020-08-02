const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config({
 path: __dirname + '/../../.env'
});

const transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
  user: process.env.MY_TEST_EMAIL_ADRESS,
  pass: process.env.MY_TEST_EMAIL_PASSWORD
 }
});

module.exports = transporter;
