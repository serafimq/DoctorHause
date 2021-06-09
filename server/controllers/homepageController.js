const Avatar = require("../models/avatar")

const setAvatars = async (req, res) => {
  const { id } = req.params
  const setAvatar = await Avatar.findOne({ user: id })
  res.json(setAvatar)
}

const addAvatars = async (req, res) => {
  const { id } = req.params
  const { image } = req.files
  const userAvatarPath = `${__dirname}/../public/avatar/${image.name}`
  const avatarPath = `/public/avatar/${image.name}`
  image.mv(userAvatarPath)
  const oldAvatar = await Avatar.findOne({ user: id })
  await Avatar.findByIdAndDelete(oldAvatar?._id)
  const newAvatar = await Avatar.create({
    avatar: avatarPath,
    user: id
  })
  res.json(newAvatar)
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
  addAvatars,
}


