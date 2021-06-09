const apiRouterMailer = require('express').Router();

const { sendMailer } = require('../controllers/mailerControler');

apiRouterMailer.route('/')
  .post(sendMailer)

module.exports = apiRouterMailer
