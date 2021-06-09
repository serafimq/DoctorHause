const apiRouterHomepage = require('express').Router();

const { setAvatars, addAvatars } = require('../controllers/homepageController');


apiRouterHomepage.route('/:id')
  .get(setAvatars)
  .post(addAvatars)

apiRouterHomepage.route('/oneEvent')
  .post()

module.exports = apiRouterHomepage
