const Avatar = require("../models/avatar")
const User = require('../models/user')

const setAvatars = async (req, res) => {
  const { id } = req.params
  console.log(id, '<<<<----айди пользователя')

  const setAvatar = await Avatar.findOne({ user: id })
  console.log(setAvatar, 'аватар пользователя котоырй в сети')

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


