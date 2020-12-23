const User = require('../models/user.model')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
const crypto = require('crypto')
const uuidv1 = require('uuid/v1')
const getStaticPath = require('../util/getStaticPath')

dotenv.config({
 path: __dirname + '/../../.env',
})

const transporterConfirmation = nodemailer.createTransport({
 service: 'gmail',
 auth: {
  user: process.env.MY_TEST_EMAIL_ADRESS,
  pass: process.env.MY_TEST_EMAIL_PASSWORD,
 },
})

const createUser = async (req, res) => {
 const { staticPath, protocol } = getStaticPath()
 try {
  const { username, email, password } = req.body
  let randomId = uuidv1()
  let hashedId = crypto.createHash('sha1').update(randomId).digest('hex')
  let newUser = await User.create({
   username,
   email,
   password,
   hashConfirm: hashedId,
  })
  let link = `${protocol}://${staticPath}/confirmation?id=${hashedId}`
  const htmlEmail =
   'Hello,<br> Please Click on the link to verify your email.<br><a href=' +
   link +
   '>Click here to verify</a>'
  let mailOptions = {
   from: process.env.MY_TEST_EMAIL_ADRESS,
   to: newUser.email,
   subject: 'Please confirm your Email account',
   html: htmlEmail,
  }
  transporterConfirmation.sendMail(mailOptions, (err, info) => {})
  await res.send({ success: true })
 } catch (err) {
  res.status(400).send(err)
 }
}

var deleteUser = async (req, res) => {
 try {
  var { email, password } = req.body
  var user = await User.findOne(
   {
    email: email,
   },
   (err) => {},
  )
  if (user && user.confirmed && user.comparePasswords(password)) {
   await res.clearCookie(process.env.SESS_NAME)
   await user.deleteOne(
    {
     email: email,
    },
    function (err, user) {
     if (err) return console.error(err)
    },
   )
   await res.send({ success: true })
  } else {
   throw new Error('Account deletion did not completed')
  }
 } catch (err) {
  res.status(401).send(err)
 }
}
module.exports = { createUser, deleteUser }
