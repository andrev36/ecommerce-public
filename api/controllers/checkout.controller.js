const Checkout = require('../models/checkout.model');

const User = require('../models/user.model');
const transporter = require('../config/contactFormConfig');
const dotenv = require('dotenv');

dotenv.config({
 path: __dirname + '/../../.env'
});

const sendCheckout = async (req, res) => {
 try {
  const {
   firstName,
   lastName,
   companyName,
   phoneNumber,
   email,
   country,
   adress,
   postcode,
   orderedItems
  } = req.body;
  var user = await User.findOne({ email: email });
  let newCheckout = await Checkout.create({
   firstName,
   lastName,
   companyName,
   phoneNumber,
   email,
   country,
   adress,
   postcode,
   orderedItems,
   userId: user._id
  });
  const htmlEmail = await newCheckout.orderedItems
   .map(
    (item) => `
    <div>Your order</div>
    <div>Item: ${item.title}</div>
    <div>Quantity: ${item.quantity}</div>
    `
   )
   .join('');
  const mailOptions = {
   from: process.env.MY_TEST_EMAIL_ADRESS,
   to: process.env.MY_EMAIL_ADRESS,
   subject: 'new message',
   replyTo: process.env.MY_EMAIL_ADRESS,
   text: process.env.MY_TEST_EMAIL_ADRESS,
   html: htmlEmail
  };
  transporter.sendMail(mailOptions, (err, info) => {});
  await res.send({ success: true });
 } catch (err) {
  res.status(400).send(err);
 }
};

const getCheckouts = async (req, res) => {
 try {
  var user = await User.findOne({ _id: req.params.userId });
  if (user && user.confirmed) {
   var checkouts = await Checkout.find({ userId: user._id }, (err) => {});
   // var checkouts = await Checkout.find({}, err => {});
   await res.send({ checkouts: checkouts, user: user, success: true });
  } else {
   throw new Error('Not authorized to process');
  }
 } catch (error) {}
};

module.exports = { sendCheckout, getCheckouts };
