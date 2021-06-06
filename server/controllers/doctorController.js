const User = require('../models/user')

const addDoctors = async (req, res) => {
  const { spec, price, name, stage, phone, metro } = req.body.doctor

  const currentUser = await User.findById(req.body.id)
  const updateUser = await currentUser.updateOne({
    spec, name, stage, phone, metro, price
  })
  return res.sendStatus(200)
}

const setDoctor = async (req, res) => {
  const currentDoctor = await User.findById(req.params.id)
  res.json(currentDoctor)
}

module.exports = {
  addDoctors, setDoctor
}
