const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema(
 {
  message: {
   type: String
  }
 },
 {
  viewed: {
   type: Boolean,
   default: false
  }
 },
 {
  timestamps: true
 }
);

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
