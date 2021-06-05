const User = require ('../models/user')

const addDoctors = async(req,res) => {
const {spec, price, name, stage, phone, metro} = req.body
const currentUser = await User.findOne(req.params.id)
const updateUser = await currentUser.updateOne({
  spec, name, stage, phone, metro, price})
return res.sendStatus(200)
}

module.exports = {
  addDoctors
}
