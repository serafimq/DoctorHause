const User = require('../models/user')

const addDoctors = async (req, res) => {
  const { spec, price, name, stage, phone, metro } = req.body.doctor
  const currentUser = await User.findById(req.body.id)
  await currentUser.updateOne({
    spec, name, stage, phone, metro, price
  })
  return res.sendStatus(200)
}

const setDoctor = async (req, res) => {
  const currentDoctor = await User.findById(req.params.id)
  res.json(currentDoctor)
}

const setAllDoctors = async (req, res) => {
  const doctorsList = await User.find({ role: "doctor" })
  res.json(doctorsList)
}

const addFeedBack = async (req, res) => {
  const { text, stars } = req.body.feedBack
  const currentUser = await User.findById(req.body.id)
  await currentUser.feedBack.push({
    text, stars: stars.value, author: req.body.id
  })
  await currentUser.save()
  return res.sendStatus(200)
}

const changeAccess = async (req, res) => {

  const { id } = req.body
  const currentUser = await User.findById(id)
  if (currentUser.approved === true) {
    await currentUser.updateOne({
      approved: false
    })
    const doctorsList = await User.find({ role: "doctor" })
    res.json(doctorsList)
  } else {
    await currentUser.updateOne({
      approved: true
    })
    const doctorsList = await User.find({ role: "doctor" })
    res.json(doctorsList)
  }
}

module.exports = {
  addDoctors, setDoctor, setAllDoctors, addFeedBack, changeAccess
}
