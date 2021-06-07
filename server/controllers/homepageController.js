const Avatar = require("../models/avatar")
const User = require('../models/user')

const setAvatars = async (req, res) => {
  const { id } = req.params
  const setAvatar = await Avatar.findOne({ user: id })
  res.json(setAvatar)
}

// const addAvatar = (upload.single("avatar"), async(req, res)) => {
//   const { id } = req.params
//   const { image } = req.files
//   const userAvatarPath = req.file.path

//   console.log(id, '<---- id')
//   console.log(image, '<---- image')
//   console.log(userAvatarPath, '<---- avatar')

//   res.json()
// }

module.exports = {
  // addAvatar,
  setAvatars,

}


