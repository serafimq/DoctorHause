const apiRouterHomepage = require('express').Router();

const { changeAccess } = require('../controllers/doctorController');
const { setAvatars } = require('../controllers/homepageController');
const { deleteUser } = require('../controllers/userController');


apiRouterHomepage.route('/:id')
  .get(setAvatars)
  .patch(changeAccess)
  .delete(deleteUser)

apiRouterHomepage.route('/oneEvent')
  .post()

module.exports = apiRouterHomepage
