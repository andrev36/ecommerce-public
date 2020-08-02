const express = require('express');
const productsController = require('../controllers/products.controller');
const dotenv = require('dotenv');

dotenv.config({
 path: __dirname + '/.env'
});

const productsRouter = express.Router();

productsRouter.route('/products').get(productsController.getProducts);

productsRouter.route('/products/:id').get(productsController.getProduct);

module.exports = productsRouter;
