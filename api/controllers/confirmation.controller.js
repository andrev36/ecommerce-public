const User = require('../models/user.model')
const getStaticPath = require('../util/getStaticPath')

const confirmEmail = async (req, res) => {
 const { staticPath, protocol } = getStaticPath()
 try {
  if (`${req.protocol}://${req.get('host')}` == `${protocol}://${staticPath}`) {
   let hashConfirm = req.query.id
   const user = await User.findOne(
    {
     hashConfirm: hashConfirm,
    },
    (err) => {},
   )
   if (req.query.id === hashConfirm) {
    user.confirmed = true
    await user.save()
    user.hashConfirm = undefined
    await user.save()
    await res.send({ success: true })
   } else {
    await res.send({ success: false })
   }
  } else {
   await res.send({ success: false })
  }
 } catch (e) {}
}

module.exports = { confirmEmail }
