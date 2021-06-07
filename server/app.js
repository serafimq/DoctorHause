const fs = require('fs');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const express = require('express');
const formData = require('express-form-data');
const session = require('express-session');
const { sessionConfig } = require('./ServDB/config');
const { createErr, cathErrAndSendAnswer } = require('./middleware/checkErrors');
const fileUpload = require("express-fileupload")
const passport = require('passport');

require('./ServDB/config-passport');

const apiRouterUser = require('./routes/apiRouterUser');
const apiRouterEvents = require('./routes/apiRouterEvents');
const apiRouterDoctor = require('./routes/apiRouterDoctor');
const apiRouterHomepage = require('./routes/apiRouterHomepage');
const apiRouterHistory = require('./routes/apiRouterHistory');
const Avatar = require('./models/avatar');

const app = express();

app.use(passport.initialize());
app.use(passport.session());

app.set('trust proxy', 1);
app.set('cookieName', 'connect.sid');

app.use(express.static(__dirname));
app.use(logger('dev'));
app.use(express.json());
app.use(session(sessionConfig));
app.use(express.urlencoded({ extended: true }));

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(logger('common', { stream: fs.createWriteStream('./access.log', { flags: 'a' }) }));
app.use(fileUpload())

app.use('/api/v1/user', apiRouterUser);
app.use('/api/v1/events', apiRouterEvents);
app.use('/api/v1/homepage', apiRouterHomepage);
app.use('/api/v1/history', apiRouterHistory);

app.post('/api/v1/homepage/:id', async (req, res) => {

  const { id } = req.params
  const { image } = req.files
  const userAvatarPath = `${__dirname}/public/avatar/${image.name}`
  const avatarPath = `/public/avatar/${image.name}`

  image.mv(userAvatarPath)
  const oldAvatar = await Avatar.findOne({ user: id })
  await Avatar.findByIdAndDelete(oldAvatar._id)

  const newAvatar = await Avatar.create({
    avatar: avatarPath,
    user: id
  })
  console.log(newAvatar)

  res.json(newAvatar)
})

app.use('/api/v1', apiRouterDoctor);
app.post('/file', (req, res) => {

  const { image } = req.files
  console.log('image', image);

  if (!fs.existsSync(`${__dirname}/client/public/img/${image.name}`.replace("/server", ""))) {
    const location = `${__dirname}/client/public/img/${image.name}`.replace("/server", "")
    const location2 = `${__dirname}/public/img/${image.name}`
    image.mv(location)
    image.mv(location2)
  }
  // res.json({imagePath: image.name})
  return res.sendStatus(200)
})

app.use(createErr, cathErrAndSendAnswer);

module.exports = app;
