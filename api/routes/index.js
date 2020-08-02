const userRouter = require('./user.route');
const sessionRouter = require('./session.route');
const contactRouter = require('./contact.route');
const checkoutRouter = require('./checkout.route');
const productsRouter = require('./products.route');
const messageRouter = require('./message.route');
const userReviewRouter = require('./userReview.route');
const cartRouter = require('./cart.route');

module.exports = {
 userRouter,
 sessionRouter,
 contactRouter,
 productsRouter,
 messageRouter,
 checkoutRouter,
 cartRouter,
 userReviewRouter
};
