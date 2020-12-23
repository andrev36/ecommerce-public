const userRouter = require('./user.route')
const sessionRouter = require('./session.route')
const contactRouter = require('./contact.route')
const checkoutRouter = require('./checkout.route')
const productsRouter = require('./products.route')
const messageRouter = require('./message.route')
const newsletterRouter = require('./newsletter.route')
const userReviewRouter = require('./userReview.route')

module.exports = {
 userRouter,
 sessionRouter,
 contactRouter,
 productsRouter,
 messageRouter,
 newsletterRouter,
 checkoutRouter,
 userReviewRouter,
}
