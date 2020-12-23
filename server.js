const csrf = require('csurf')
const express = require('express')
const Sentry = require('@sentry/node')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const mongoSanitize = require('express-mongo-sanitize')
const helmet = require('helmet')
const xss = require('xss-clean')
const rateLimit = require('express-rate-limit')
const hpp = require('hpp')
const cors = require('cors')
const connectStore = require('connect-mongo')
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const {
 userRouter,
 sessionRouter,
 contactRouter,
 productsRouter,
 messageRouter,
 newsletterRouter,
 checkoutRouter,
 userReviewRouter,
} = require('./api/routes/index')
const errorHandler = require('./api/middleware/error')
const connectDB = require('./api/config/db')
const confirmationRouter = require('./api/routes/confirmation.route')
const path = require('path')
// * App monitoring service - DataDog options
var dd_options = {
 response_code: true,
 tags: ['app:ecommerce_website'],
}
var connect_datadog = require('connect-datadog')(dd_options)

dotenv.config({
 path: __dirname + '/.env',
})

// * Error monitoring service
var Honeybadger = require('honeybadger').configure({
 apiKey: process.env.HONEYBADGER_API_KEY,
})

;(async () => {
 try {
  // * Connect to database
  await connectDB()

  const app = express()

  /*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  * NOTE Settings for production environment
  * Path to React build folder and entry html file
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  if (process.env.NODE_ENV === 'production') {
   app.use(express.static(path.join(__dirname, 'client', 'build')))
   app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
   })
  }
  // * NOTE Setting static folder for images
  app.use(express.static(path.join(__dirname, 'public')))
  app.use('/static', express.static('public'))
  // app.get('/*', function (req, res) {
  //  res.sendFile(path.join(__dirname, 'client/build/index.html'), function (
  //   err
  //  ) {
  //   if (err) {
  //    res.status(500).send(err);
  //   }
  //  });
  // });

  // * Error monitoring service
  Sentry.init({
   dsn: process.env.SENTRY_API_KEY,
  })
  app.use(Sentry.Handlers.errorHandler())

  // * Error monitoring setting to catch 404 errors
  app.use(
   Sentry.Handlers.errorHandler({
    shouldHandleError(error) {
     // Capture all 404 and 500 errors
     if (error.status === 404 || error.status === 500) {
      return true
     }
     return false
    },
   }),
  )

  // * Error monitoring service setting
  app.use(Honeybadger.requestHandler) // Use *before* all other app middleware.

  app.disable('x-powered-by')
  app.use(express.json())
  if (process.env.NODE_ENV === 'development') {
   app.use(morgan('dev'))
  }
  // * Session settings
  const MongoStore = connectStore(session)
  app.use(
   session({
    name: process.env.SESS_NAME,
    secret: process.env.SESS_SECRET,
    saveUninitialized: false,
    resave: false,
    store: new MongoStore({
     mongooseConnection: mongoose.connection,
     collection: 'session',
     ttl: parseInt(process.env.SESS_LIFETIME) / 1000,
    }),
    cookie: {
     sameSite: true,
     secure: process.env.NODE_ENV === 'production',
     maxAge: parseInt(process.env.SESS_LIFETIME),
    },
   }),
  )
  // * DataDog connection
  app.use(connect_datadog)

  // * Cookie parser
  app.use(cookieParser())

  // * CSRf
  // app.use(csrf());

  // app.use(function (req, res, next) {
  //  // Expose variable to templates via locals
  //  res.locals.csrftoken = req.csrfToken();
  //  next();
  // });

  // * Sanitize data
  app.use(mongoSanitize())

  // * Set security headers
  app.use(helmet())

  // * Prevent XSS attacks
  app.use(xss())

  // * Rate limiting
  const limiter = rateLimit({
   windowMs: 10 * 60 * 1000, // 10 mins
   max: 100,
  })
  app.use(limiter)

  // * Prevent http param pollution
  app.use(hpp())

  // * Enable CORS
  app.use(cors())

  // * Parse incoming request bodies in a middleware before your handlers
  app.use(
   bodyParser.urlencoded({
    extended: true,
   }),
  )

  // * REST API Endpoints - defining the '/api'  or root '/' endpoints
  const apiRouter = express.Router()
  const rootRouter = express.Router()
  app.use('/api', apiRouter)
  app.use('/', rootRouter)
  apiRouter.use('', userRouter)
  apiRouter.use('', sessionRouter)
  apiRouter.use('', contactRouter)
  apiRouter.use('', checkoutRouter)
  apiRouter.use('', productsRouter)
  rootRouter.use('', confirmationRouter)
  apiRouter.use('', messageRouter)
  apiRouter.use('', newsletterRouter)
  apiRouter.use('', userReviewRouter)

  app.use(errorHandler)

  // * Start listening on PORT for Node.js App
  const PORT = process.env.PORT
  app.listen(PORT, () => {})

  // * Handle unhandled promise rejections
  process.on('unhandledRejection', (err, promise) => {
   if (process.env.NODE_ENV === 'development') {
    console.log(`Error: ${err.message}`.red)
   }
  })

  // * Error monitoring service setting
  app.use(Honeybadger.errorHandler) // Use *after* all other app middleware.
  // SENTRY ERROR HANDLER
  // Optional fallthrough error handler
  app.use(function onError(err, req, res, next) {
   // The error id is attached to `res.sentry` to be returned
   // and optionally displayed to the user for support.
   res.statusCode = 500
   res.end(res.sentry + '\n')
  })
 } catch (err) {
  if (process.env.NODE_ENV === 'development') {
   console.log(error)
  }
 }
})()
