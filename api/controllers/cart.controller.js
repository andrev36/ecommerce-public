const dotenv = require('dotenv');
const Cart = require('../models/cart.model');
const User = require('../models/user.model');

dotenv.config({
 path: __dirname + '/.env'
});

const getCartAddedItems = async (req, res) => {
 try {
  // * NOTE GETTING USERID
  var user = await User.findOne({ _id: userId }, (err, obj) => {});
  // * NOTE CART
  var data = await Cart.find({ userId: userId }, (err, obj) => {});
  if (user && user.confirmed) {
   var json = {
    data: data,
    success: true
   };
   await res.json(json);
  } else {
   throw new Error('Not authorized to create messages');
  }
 } catch (error) {
  res.status(404).send(error);
 }
};

const addItemToCart = async (req, res) => {
 try {
  const { itemAddedToCart, userId } = req.body;
  var user = await User.findOne({ _id: userId }, (err, obj) => {});
  if (user && user.confirmed) {
   await Cart.create({
    itemAddedToCart,
    userId
   });
   await res.send({ success: true });
  } else {
   throw new Error('Not authorized to add items to cart');
  }
 } catch (error) {
  {
  }
 }
};

const removeItemFromCart = async (req, res) => {
 try {
  const { itemRemovedFromCart, userId } = req.body;
  const { id } = itemRemovedFromCart;
  var user = await User.findOne({ _id: userId }, (err, obj) => {});
  if (user && user.confirmed) {
   await Cart.deleteOne(
    {
     product: { id: { id } },
     userId: userId
    },
    (err) => {}
   );
   await res.send({ success: true });
  } else {
   throw new Error('Not authorized to create messages');
  }
 } catch (error) {}
};

module.exports = { getCartAddedItems, addItemToCart, removeItemFromCart };
