const mongoose = require('mongoose'),
 dotenv = require('dotenv')

dotenv.config({
 path: __dirname + '/../../.env',
})

const DB_URI = process.env.MONGO_CONNECTION

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Settings for connection with the MongoDB Atlas cloud service
* Log messages in development environment for a different
* database connection states
* Using the mongoose ORM for Node.js
* Connection is established before any other middleware is used
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const connectDB = async () => {
 const conn = await mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
 })
 if (process.env.NODE_ENV === 'development') {
  console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold)
  mongoose.connection.on('connected', function () {
   console.log('Mongoose default connection open to ' + DB_URI)
  })

  mongoose.connection.on('error', function (err) {
   console.log('Mongoose default connection error: ' + err)
  })

  mongoose.connection.on('disconnected', function () {
   console.log('Mongoose default connection disconnected')
  })

  process.on('SIGINT', function () {
   mongoose.connection.close(function () {
    console.log(
     'Mongoose default connection disconnected through app termination',
    )
    process.exit(0)
   })
  })
 }
}

module.exports = connectDB
