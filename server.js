const csrf = require('csurf');
const express = require('express');
const Sentry = require('@sentry/node');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');
const connectStore = require('connect-mongo');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const {
 userRouter,
 sessionRouter,
 contactRouter,
 productsRouter,
 messageRouter,
 checkoutRouter,
 cartRouter,
 userReviewRouter
} = require('./api/routes/index');
const errorHandler = require('./api/middleware/error');
const connectDB = require('./api/config/db');
const confirmationRouter = require('./api/routes/confirmation.route');
const path = require('path');
// ! Data dog student pack - available for 2 years
// Datadog options
var dd_options = {
 response_code: true,
 tags: ['app:ecommerce_website']
};
var connect_datadog = require('connect-datadog')(dd_options);

dotenv.config({
 path: __dirname + '/.env'
});

// FREE FOR 1 YEAR FROM 2.11.2019 TOOL FOR ERROR MONITORING
var Honeybadger = require('honeybadger').configure({
 apiKey: process.env.HONEYBADGER_API_KEY
});

(async () => {
 try {
  await connectDB();

  const app = express();

  if (process.env.NODE_ENV === 'production') {
   app.use(express.static(path.join(__dirname, 'client', 'build')));
   app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
   });
  }
  // * NOTE Setting static folder for images
  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/static', express.static('public'));

  // ! FREE FOR WHILE STUDENT FROM 2.11.2019 TOOL FOR ERROR MONITORING
  // The request handler must be the first middleware on the app
  Sentry.init({
   dsn: process.env.SENTRY_API_KEY
  });
  // The error handler must be before any other error middleware and after all controllers
  app.use(Sentry.Handlers.errorHandler());

  // SENTRY DEFINE 404 ERRORS TO CATCH TOO
  app.use(
   Sentry.Handlers.errorHandler({
    shouldHandleError(error) {
     // Capture all 404 and 500 errors
     if (error.status === 404 || error.status === 500) {
      return true;
     }
     return false;
    }
   })
  );

  // FREE FOR 1 YEAR FROM 2.11.2019 TOOL FOR ERROR MONITORING
  app.use(Honeybadger.requestHandler); // Use *before* all other app middleware.

  app.disable('x-powered-by');
  app.use(express.json());
  if (process.env.NODE_ENV === 'development') {
   app.use(morgan('dev'));
  }
  const MongoStore = connectStore(session);
  app.use(
   session({
    name: process.env.SESS_NAME,
    secret: process.env.SESS_SECRET,
    saveUninitialized: false,
    resave: false,
    store: new MongoStore({
     mongooseConnection: mongoose.connection,
     collection: 'session',
     ttl: parseInt(process.env.SESS_LIFETIME) / 1000
    }),
    cookie: {
     sameSite: true,
     secure: process.env.NODE_ENV === 'production',
     maxAge: parseInt(process.env.SESS_LIFETIME)
    }
   })
  );
  // Datadog
  app.use(connect_datadog);

  // Cookie parser
  app.use(cookieParser());

  // CSRf
  app.use(csrf());

  app.use(function (req, res, next) {
   // Expose variable to templates via locals
   res.locals.csrftoken = req.csrfToken();
   next();
  });

  // Sanitize data
  app.use(mongoSanitize());

  // Set security headers
  app.use(helmet());

  // Prevent XSS attacks
  app.use(xss());

  // Rate limiting
  const limiter = rateLimit({
   windowMs: 10 * 60 * 1000, // 10 mins
   max: 100
  });
  app.use(limiter);

  // Prevent http param pollution
  app.use(hpp());

  // Enable CORS
  app.use(cors());

  app.use(
   bodyParser.urlencoded({
    extended: true
   })
  );

  const apiRouter = express.Router();
  const rootRouter = express.Router();
  app.use('/api', apiRouter);
  app.use('/', rootRouter);
  apiRouter.use('', userRouter);
  apiRouter.use('', sessionRouter);
  apiRouter.use('', contactRouter);
  apiRouter.use('', checkoutRouter);
  apiRouter.use('', productsRouter);
  rootRouter.use('', confirmationRouter);
  apiRouter.use('', messageRouter);
  apiRouter.use('', userReviewRouter);
  apiRouter.use('', cartRouter);

  app.use(errorHandler);

  const PORT = process.env.PORT;
  app.listen(PORT, () => {});

  // Handle unhandled promise rejections
  process.on('unhandledRejection', (err, promise) => {
   if (process.env.NODE_ENV === 'development') {
    console.log(`Error: ${err.message}`.red);
   }
   // Close server & exit process
   // server.close(() => process.exit(1));
  });

  // HONEYBADGER
  // FREE FOR 1 YEAR FROM 2.11.2019 TOOL FOR ERROR MONITORING
  app.use(Honeybadger.errorHandler); // Use *after* all other app middleware.
  // SENTRY ERROR HANDLER
  // Optional fallthrough error handler
  app.use(function onError(err, req, res, next) {
   // The error id is attached to `res.sentry` to be returned
   // and optionally displayed to the user for support.
   res.statusCode = 500;
   res.end(res.sentry + '\n');
  });
 } catch (err) {
  if (process.env.NODE_ENV === 'development') {
   console.log(error);
  }
 }
})();
