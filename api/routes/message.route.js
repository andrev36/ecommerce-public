const express = require('express');
const messageController = require('../controllers/message.controller');

const messageRouter = express.Router();

messageRouter.post('/message', messageController.sendMessage);

messageRouter.route('/message').get(messageController.getMessages);

module.exports = messageRouter;
