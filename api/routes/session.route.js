const express = require('express');
const sessionController = require('../controllers/session.controller');
const dotenv = require('dotenv');

dotenv.config({
 path: __dirname + '/.env'
});

const sessionRouter = express.Router();

sessionRouter
 .route('/session')
 .post(sessionController.login)
 .delete(sessionController.logout)
 .get(sessionController.getUser);

module.exports = sessionRouter;
