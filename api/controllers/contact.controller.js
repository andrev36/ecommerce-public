const transporter = require('../config/contactFormConfig');
const dotenv = require('dotenv');

dotenv.config({
 path: __dirname + '/../../.env'
});

const sendContactEmail = async (req, res) => {
 try {
  const htmlEmail = `
    <h3>Contact details</h3>
    <ul>
        <li>Email: ${req.body.email}</li>
    </ul>
    <h3>message</h3>
    <p>${req.body.messageEmail}</p>
     `;

  const mailOptions = {
   from: req.body.email,
   to: process.env.MY_TEST_EMAIL_ADRESS,
   replyTo: req.body.email,
   subject: 'new message',
   text: req.body.messageEmail,
   html: htmlEmail
  };

  transporter.sendMail(mailOptions, (err, info) => {});

  await res.send({ success: true });
 } catch (error) {}
};

module.exports = { sendContactEmail };
