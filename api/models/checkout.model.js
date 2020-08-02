const mongoose = require('mongoose');

const CheckoutSchema = new mongoose.Schema(
 {
  firstName: {
   type: String,
   required: true
  },
  lastName: {
   type: String
  },
  companyName: {
   type: String
  },
  phoneNumber: {
   type: Number
  },
  email: {
   type: String,
   required: true
  },
  country: {
   type: String
  },
  adress: {
   type: String
  },
  postcode: {
   type: String
  },
  orderedItems: {
   type: Object,
   required: true
  },
  userId: {
   type: String,
   required: true
  }
 },
 {
  timestamps: true
 }
);

const Checkout = mongoose.model('Checkout', CheckoutSchema);

module.exports = Checkout;
