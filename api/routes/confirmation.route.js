const express = require('express');
const confirmationRouter = express.Router();
const confirmationController = require('../controllers/confirmation.controller');

confirmationRouter
 .route('/confirmation')
 .get(confirmationController.confirmEmail);

module.exports = confirmationRouter;
