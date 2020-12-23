const transporter = require('../config/contactFormConfig')
const dotenv = require('dotenv')

dotenv.config({
 path: __dirname + '/../../.env',
})

const sendContactEmail = async (req, res) => {
 try {
  const htmlEmail = `
    <h3>Contact details</h3>
    <ul>
        <li>Email: ${req.body.email}</li>
    </ul>
    <h3>message</h3>
    <p>${req.body.messageEmail}</p>
     `

  const mailOptions = {
   from: process.env.MY_TEST_EMAIL_ADRESS,
   to: req.body.email,
   replyTo: process.env.MY_TEST_EMAIL_ADRESS,
   subject: 'Your message submitted in contact form',
   text: 'Your message submitted in contact form',
   html: htmlEmail,
  }

  await transporter.sendMail(mailOptions, (err, info) => {})

  await res.send({ success: true })
 } catch (error) {}
}

module.exports = { sendContactEmail }
