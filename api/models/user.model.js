const mongoose = require('mongoose');
const { compareSync, hashSync } = require('bcryptjs');

const UserSchema = new mongoose.Schema(
 {
  username: {
   type: String
  },
  email: {
   type: String
  },
  password: {
   type: String
  },
  confirmed: {
   type: Boolean,
   default: false
  },
  hashConfirm: {
   type: String
  },
  isAdmin: {
   type: Boolean,
   default: false
  }
 },
 {
  timestamps: true
 }
);

// Encrypt password using bcrypt
UserSchema.pre('save', async function (next) {
 if (this.isModified('password')) {
  this.password = hashSync(this.password, 10);
 }
});

UserSchema.statics.doesNotExist = async function (field) {
 return (await this.where(field).countDocuments()) === 0;
};

UserSchema.methods.comparePasswords = function (password) {
 return compareSync(password, this.password);
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
