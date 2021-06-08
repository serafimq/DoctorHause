const bcrypt = require('bcrypt')
const User = require('../models/user')
const { OAuth2Client } = require('google-auth-library')

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
      avatar: 'http://cs319323.vk.me/v319323049/70e1/2gddfIt0mvc.jpg'
    })

    req.session.user = {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      avatar: newUser.avatar,
    }
    return res.json(newUser)
  }
  return res.sendStatus(418)
}

const client = new OAuth2Client('841640719406-h6m0ejjq4i5gs63dnahqd1ss9mpu6b42.apps.googleusercontent.com')

const signUpGoogle = async (req, res) => {
  const { tokenId, role } = req.body;
  const response = await client.verifyIdToken({ idToken: tokenId, audience: '841640719406-h6m0ejjq4i5gs63dnahqd1ss9mpu6b42.apps.googleusercontent.com' })
  const { email_verified, name, email } = response.payload
  if (email_verified) {
    const newUser = await User.create({
      email,
      name,
      role,
    })
    req.session.user = {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    }
    return res.json(newUser)
  }
  return res.sendStatus(418)
}

const signInGoogle = async (req, res) => {
  const { tokenId } = req.body;
  const response = await client.verifyIdToken({ idToken: tokenId, audience: '841640719406-h6m0ejjq4i5gs63dnahqd1ss9mpu6b42.apps.googleusercontent.com' })
  const { email_verified, name, email } = response.payload
  if (email_verified) {
    const newUser = await User.findOne({
      email,
    })
    req.session.user = {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    }
    return res.json(newUser)
  }
  return res.sendStatus(418)
}

const userSignin = async (req, res) => {
  const { email, pass } = req.body
  if (email && pass) {
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
  signUpGoogle,
  userSignin,
  signInGoogle,
  userSignout,
  userInfo,
  checkUser,
}
