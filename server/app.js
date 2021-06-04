const fs = require('fs');
const cors = require('cors');
const logger = require('morgan');
const express = require('express');
const session = require('express-session');
const { sessionConfig } = require('./ServDB/config');
const {createErr, cathErrAndSendAnswer} = require('./middleware/checkErrors');
const passport = require('passport');
require('./ServDB/config-passport');

const apiRouterUser = require('./routes/apiRouterUser');

const app = express();

app.use(passport.initialize());
app.use(passport.session());

app.set('trust proxy', 1);
app.set('cookieName', 'connect.sid');

app.use(logger('dev'));
app.use(express.json());
app.use(session(sessionConfig));
app.use(express.urlencoded({ extended: true }));
app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(logger('common', {stream: fs.createWriteStream('./access.log', {flags: 'a'})}));

app.use('/api/v1/user', apiRouterUser);

app.use(createErr, cathErrAndSendAnswer);

module.exports = app;
