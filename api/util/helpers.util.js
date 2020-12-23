const sessionizeUser = (user) => {
 return {
  userId: user._id,
  username: user.username,
  isAdmin: user.isAdmin,
 }
}

module.exports = {
 sessionizeUser,
}
