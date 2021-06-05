const User = require ('../models/user')

const addDoctors = async(req,res) => {
const {spec, name, email, stage, phone, metro} = req.body
const currentUser = await User.findOne(req.params.id)
const updateUser = await currentUser.updateOne(spec, name, email, stage, phone, metro)
return res.sendStatus(200)
}

module.exports = {
  addDoctors
}
