const Message = require('../models/message.model')
const User = require('../models/user.model')

const sendMessage = async (req, res) => {
 try {
  const { message, userId } = req.body
  var user = await User.findOne({ _id: userId }, (err, obj) => {})
  if (user && user.confirmed && user.isAdmin) {
   await Message.create({
    message,
   })
   await res.send({ success: true })
  } else {
   throw new Error('Not authorized to create messages')
  }
 } catch (error) {}
}

const getMessages = async (req, res) => {
 try {
  var messages = await Message.find({}, (err) => {})
  await res.send({
   messages: messages,
   unreadMessages: messages,
   success: true,
  })
 } catch (error) {}
}

module.exports = { sendMessage, getMessages }
