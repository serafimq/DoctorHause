const apiRouterHomepage = require('express').Router();

const { setAvatars } = require('../controllers/homepageController');


apiRouterHomepage.route('/:id')
  .get(setAvatars)

apiRouterHomepage.route('/oneEvent')
  .post()

module.exports = apiRouterHomepage

