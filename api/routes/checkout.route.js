const express = require('express')
const checkoutController = require('../controllers/checkout.controller')

const checkoutRouter = express.Router()

checkoutRouter
 .route('/checkout')
 .post(checkoutController.sendCheckout)
 .get(checkoutController.getCheckouts)

module.exports = checkoutRouter
