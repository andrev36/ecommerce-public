const express = require('express');
const contactController = require('../controllers/contact.controller');

const contactRouter = express.Router();

contactRouter.route('/contact').post(contactController.sendContactEmail);

module.exports = contactRouter;
