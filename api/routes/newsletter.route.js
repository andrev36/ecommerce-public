const express = require('express')
const newsletterController = require('../controllers/newsletter.controller')

const newsletterRouter = express.Router()

newsletterRouter
 .route('/newsletter')
 .post(newsletterController.sendNewsletterEmail)

module.exports = newsletterRouter
