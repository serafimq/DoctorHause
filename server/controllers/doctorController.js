const User = require('../models/user')
const fs = require('fs')

const addDoctors = async (req, res) => {
  const { spec, price, name, stage, phone, metro, } = req.body.doctor
  const { imagePath } = req.body
  const currentUser = await User.findByIdAndUpdate({_id: req.body.id}, {spec, name, stage, phone, metro, price, imageCertificate: imagePath}, {new: true})
  // const newUser = await currentUser.updateOne({
  //   spec, name, stage, phone, metro, price, imageCertificate: imagePath
  // }, {new: true})
  console.log(currentUser, 'currentUser');
  return res.json(currentUser)
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
  console.log(req.body, 'req.body');
  const { text, stars } = req.body.feedBack
  const currentUser = await User.findById(req.body.id)
  await currentUser.feedBack.push({
    text, stars: stars.value, author: req.body.id
  })
  currentUser.save()
  console.log(currentUser, 'currentUser');
  return res.json(currentUser)
}

const addFeedBackPATCH = async (req, res) => {
  console.log(req.body, 'req.body');
  const { text, stars } = req.body.feedBack
  const currentUser = await User.findById(req.body.id)
  await currentUser.feedBack.push({
    text, stars: stars.value, author: req.body.id
  })
  currentUser.save()
  return res.json(currentUser)
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


  const fileDoctors = async (req, res) => {
    const { image } = req.files
    console.log(__dirname, '__dirname');
    console.log('image', image);
    const location = `${__dirname}/client/public/img/sert/${image.name}`.replace("/server/controllers", "")
    const location2 = `${__dirname}/public/img/sert/${image.name}`.replace("/controllers", "")

    if (!fs.existsSync(location)) {
      image.mv(location)
      image.mv(location2)
      return res.sendStatus(200)
    } else {
      res.sendStatus(418)
    }
    // res.json({imagePath: image.name})
}

module.exports = {
  addDoctors, setDoctor, setAllDoctors, addFeedBack, changeAccess, fileDoctors, addFeedBackPATCH
}
