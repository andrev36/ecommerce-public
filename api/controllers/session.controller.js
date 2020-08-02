const User = require('../models/user.model');
const { sessionizeUser } = require('../util/helpers.util');
const dotenv = require('dotenv');

dotenv.config({
 path: __dirname + '/.env'
});

const login = async (req, res) => {
 try {
  const { email, password } = req.body;
  const user = await User.findOne(
   {
    email
   },
   (err) => {}
  );
  if (user && user.confirmed && user.comparePasswords(password)) {
   const sessionUser = sessionizeUser(user);
   req.session.user = sessionUser;
   await res.send(sessionUser);
   await res.end('res.end() launched');
  } else {
   throw new Error('Invalid login credentials');
  }
 } catch (err) {
  res.status(401).send(err);
 }
};

const logout = async ({ session }, res) => {
 try {
  const user = session;
  if (user) {
   session.destroy(async (err) => {
    if (err) throw err;
    await res.clearCookie(process.env.SESS_NAME);
    await res.send(user);
    await res.end('logout response ended!');
   });
  } else {
   throw new error('something went wrong');
  }
 } catch (err) {
  res.status(422).send(err);
 }
};

const getUser = async (req, res) => {
 const { user } = req.session;
 await res.send({ user });
};

module.exports = { login, logout, getUser };
