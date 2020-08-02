const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
 product: {
  type: Object
 },
 userId: {
  type: Number
 }
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
