const apiRouterUser = require('express').Router();

const {
  userSignup,
  signUpGoogle,
  userSignin,
  signInGoogle,
  userSignout, 
  userInfo, 
  checkUser,
} = require('../controllers/userController')

const {checkAuth} = require('../middleware/checkAuth')

apiRouterUser.route('/signup')
  .post(userSignup)

  apiRouterUser.route('/googlesignup')
  .post(signUpGoogle)

apiRouterUser.route('/signin')
  .post(userSignin)

apiRouterUser.route('/googlesignin')
  .post(signInGoogle)

apiRouterUser.route('/signout')
  .delete(userSignout)

apiRouterUser.route('/checkAuth')
  .get(checkUser)

apiRouterUser.route('/getInfo')
  .get(checkAuth, userInfo)

module.exports = apiRouterUser
