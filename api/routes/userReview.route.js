const express = require('express');
const userReviewController = require('../controllers/userReview.controller');

const userReviewRouter = express.Router();

userReviewRouter
 .route('/user-review/:productID')
 .get(userReviewController.getUserReviews)
 .post(userReviewController.sendUserReview);

module.exports = userReviewRouter;
