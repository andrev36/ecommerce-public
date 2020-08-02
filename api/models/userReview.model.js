const mongoose = require('mongoose');

const UserReviewSchema = new mongoose.Schema(
 {
  comment: {
   type: String
  },
  rating: {
   type: Number
  },
  userId: {
   type: String
  },
  productID: {
   type: Number
  }
 },
 {
  timestamps: true
 }
);

const UserReview = mongoose.model('UserReview', UserReviewSchema);

module.exports = UserReview;
