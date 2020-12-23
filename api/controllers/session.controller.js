const User = require('../models/user.model')
const { sessionizeUser } = require('../util/helpers.util')
const dotenv = require('dotenv')

dotenv.config({
 path: __dirname + '/.env',
})

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Login logic using the mongoose model and middleware for
* creating a session data shape.
* Check if user is confirmed and if password provided on
* a client side is same as in the database
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const login = async (req, res) => {
 try {
  const { email, password } = req.body
  const user = await User.findOne(
   {
    email,
   },
   (err) => {},
  )
  if (user && user.confirmed && user.comparePasswords(password)) {
   const sessionUser = sessionizeUser(user)
   req.session.user = sessionUser
   await res.send(sessionUser)
   await res.end('res.end() launched')
  } else {
   throw new Error('Invalid login credentials')
  }
 } catch (err) {
  res.status(401).send(err)
 }
}

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Logout logic. On REST API Endpoint match: destroy
* session, clear cookie and send a current state for the user
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const logout = async (req, res) => {
 try {
  const user = req.session
  if (user) {
   req.session.destroy(async (err) => {
    if (err) throw err
    await res.clearCookie(process.env.SESS_NAME)
    await res.send(user)
    await res.end('logout response ended!')
   })
  } else {
   throw new error('something went wrong')
  }
 } catch (err) {
  res.status(422).send(err)
 }
}

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Send user state (session) for every request from
* client side
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const getUser = async (req, res) => {
 const { user } = req.session
 await res.send({ user })
}

module.exports = { login, logout, getUser }
