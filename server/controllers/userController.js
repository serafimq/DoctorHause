const bcrypt = require('bcrypt')
const User = require('../models/user')

const saltRound = 10

const userSignup = async (req, res) => {
  const { email, pass: plainPass, name, role } = req.body
  if (email && plainPass && name && role) {
    const pass = await bcrypt.hash(plainPass, saltRound)
    const newUser = await User.create({
      email,
      pass,
      name,
      role,
    })
    req.session.user = {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    }
    return res.json(newUser)
  }
  return res.sendStatus(418)
}

const userSignin = async (req, res) => {
  const { email, pass, role } = req.body
  if (email && pass && role) {
    const currentUser = await User.findOne({ email })
    if (currentUser && (await bcrypt.compare(pass, currentUser.pass))) {
      req.session.user = {
        id: currentUser._id,
        name: currentUser.name,
        email: currentUser.email,
        role: currentUser.role,
      }
      return res.json(currentUser)
    }
    return res.sendStatus(418)
  }
  return res.sendStatus(418)
}

const userSignout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.sendStatus(500)
    res.clearCookie(req.app.get('cookieName'))
    return res.sendStatus(200)
  })
}

const userInfo = async (req, res) => {
  res.json(
    req.session.user.name,
  )
}

const checkUser = (req, res) => (req.session?.user?.id ? res.sendStatus(200) : res.sendStatus(401))

module.exports = {
  userSignup,
  userSignin,
  userSignout,
  userInfo,
  checkUser,
}
