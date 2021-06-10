const apiRouterHomepage = require('express').Router();
const { changeAccess } = require('../controllers/doctorController');
const { setAvatars, addAvatars } = require('../controllers/homepageController');
const { deleteUser } = require('../controllers/userController');

apiRouterHomepage.route('/:id')
  .get(setAvatars)
  .post(addAvatars)
  .patch(changeAccess)

apiRouterHomepage.route('/oneEvent')
  .post()


module.exports = apiRouterHomepage
