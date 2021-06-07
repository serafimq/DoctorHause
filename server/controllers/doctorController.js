const User = require('../models/user')

const addDoctors = async (req, res) => {
  const { spec, price, name, stage, phone, metro } = req.body.doctor
  
  const currentUser = await User.findById(req.body.id)
  console.log(req.body.id);
  const updateUser = await currentUser.updateOne({
    spec, name, stage, phone, metro, price
  })
  return res.sendStatus(200)
}

const setDoctor = async (req, res) => {
  const currentDoctor = await User.findById(req.params.id)
  res.json(currentDoctor)
}


const setAllDoctors = async (req, res) => {
  const doctorsList = await User.find( { role: "doctor" } )
  res.json(doctorsList)
}




module.exports = {
  addDoctors, setDoctor, setAllDoctors
}
