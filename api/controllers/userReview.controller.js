const UserReview = require('../models/userReview.model');
const User = require('../models/user.model');

const sendUserReview = async (req, res) => {
 try {
  const { comment, rating, userId, productID } = req.body;
  var user = await User.findOne({ _id: userId }, (err, obj) => {});
  if (user && user.confirmed) {
   await UserReview.create({
    comment,
    rating,
    userId,
    productID
   });
   await res.send({ success: true });
  } else {
   throw new Error('Not authorized to create messages');
  }
 } catch (error) {}
};

const getUserReviews = async (req, res) => {
 try {
  var userReviews = await UserReview.find(
   {
    productID: req.params.productID
   },
   (err, obj) => {}
  );
  await res.send({ userReviews: userReviews, success: true });
 } catch (error) {}
};

module.exports = { sendUserReview, getUserReviews };
