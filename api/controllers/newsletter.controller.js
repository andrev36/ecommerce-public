const transporter = require('../config/contactFormConfig')
const dotenv = require('dotenv')

dotenv.config({
 path: __dirname + '/../../.env',
})

const sendNewsletterEmail = async (req, res) => {
 try {
  const htmlEmail = `
    <h3>Contact details</h3>
    <ul>
        <li>Email inserted in Newsletter form: ${req.body.email}</li>
    </ul>
     `

  const mailOptions = {
   from: process.env.MY_TEST_EMAIL_ADRESS,
   to: req.body.email,
   replyTo: process.env.MY_TEST_EMAIL_ADRESS,
   subject: 'Newsletter after form submit',
   text: 'Test Newsletter after form submit',
   html: htmlEmail,
  }

  await transporter.sendMail(mailOptions, (err, info) => {})

  await res.send({ success: true })
 } catch (error) {}
}

module.exports = { sendNewsletterEmail }
