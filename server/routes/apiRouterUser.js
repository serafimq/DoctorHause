const apiRouterUser = require('express').Router();

const {
  userSignup, 
  userSignin, 
  userSignout, 
  userInfo, 
  checkUser,
} = require('../controllers/userController')

const {addDoctors, setDoctor} = require ('../controllers/doctorController')

const {checkAuth} = require('../middleware/checkAuth')

apiRouterUser.route('/signup')
  .post(userSignup)

apiRouterUser.route('/signin')
  .post(userSignin)

apiRouterUser.route('/signout')
  .delete(userSignout)

apiRouterUser.route('/checkAuth')
  .get(checkUser)

apiRouterUser.route('/getInfo')
  .get(checkAuth, userInfo)

apiRouterUser.route('/homepage/:id')
  .post(addDoctors)

apiRouterUser.route('/homepage/:id')
  .get(setDoctor)


module.exports = apiRouterUser
