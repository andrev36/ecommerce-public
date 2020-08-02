const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/user.controller');

userRouter.route('/users').post(userController.createUser);
userRouter.route('/users/delete').post(userController.deleteUser);

module.exports = userRouter;
