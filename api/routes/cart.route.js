const express = require('express');
const cartController = require('../controllers/cart.controller');
const dotenv = require('dotenv');

dotenv.config({
 path: __dirname + '/.env'
});

const cartRouter = express.Router();

cartRouter.route('/cart').get(cartController.getCartAddedItems);

cartRouter.route('/cart/add/:id').post(cartController.addItemToCart);

cartRouter.route('/cart/remove/:id').post(cartController.removeItemFromCart);

module.exports = cartRouter;
