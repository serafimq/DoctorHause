const apiRouterMailer = require('express').Router();
const { sendMailer, wsChat } = require('../controllers/mailerControler');
apiRouterMailer.route('/')
  .get(wsChat)
  .post(sendMailer)
module.exports = apiRouterMailer
