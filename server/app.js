const fs = require('fs');
const path = require('path');
const ws = require('ws')
const cors = require('cors');
const logger = require('morgan');
const express = require('express');
const session = require('express-session');
const formData = require('express-form-data');
const fileUpload = require("express-fileupload")
const { sessionConfig } = require('./ServDB/config');
const { createErr, cathErrAndSendAnswer } = require('./middleware/checkErrors');

const apiRouterUser = require('./routes/apiRouterUser');
const apiRouterEvents = require('./routes/apiRouterEvents');
const apiRouterDoctor = require('./routes/apiRouterDoctor');
const apiRouterHistory = require('./routes/apiRouterHistory');
const Avatar = require('./models/avatar');
const apiRouterMap = require('./routes/apiRouterMap');
const User = require('./models/user');
const apiRouterHomepage = require('./routes/apiRouterHomepage');
const apiRouterMailer = require('./routes/apiRouterMessage');

const app = express();

app.set('trust proxy', 1);
app.set('cookieName', 'connect.sid');

app.use(logger('dev'));
app.use(express.json());
app.use(session(sessionConfig));
app.use(express.static(__dirname));
// app.use('/static', express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(logger('common', { stream: fs.createWriteStream('./access.log', { flags: 'a' }) }));
app.use(fileUpload())



app.post('/api/v1/homepage/:id', async (req, res) => {
  const { id } = req.params
  const { image } = req.files
  const userAvatarPath = `${__dirname}/public/avatar/${image.name}`
  const avatarPath = `/public/avatar/${image.name}`
  image.mv(userAvatarPath)
  const oldAvatar = await Avatar.findOne({ user: id })

  if (oldAvatar !== null) {
    await Avatar.findByIdAndDelete(oldAvatar._id)
  }

  const newAvatar = await Avatar.create({
    avatar: avatarPath,
    user: id
  })

  const user = await User.findById(id)
  user.avatar = newAvatar.avatar
  await user.save()

  res.json(newAvatar)
})

app.use('/api/v1/mailer', apiRouterMailer);
app.use('/api/v1/doctors', apiRouterDoctor)
app.use('/api/v1/user', apiRouterUser);
app.use('/api/v1/events', apiRouterEvents);
app.use('/api/v1/history', apiRouterHistory);
app.use('/api/v1/homepage', apiRouterHomepage);
app.use('/api/v1/map', apiRouterMap);


app.post('/file', (req, res) => {
  const { image } = req.files
  console.log('image', image);
  const location = `${__dirname}/client/public/img/${image.name}`.replace("/server", "")
  const location2 = `${__dirname}/public/img/${image.name}`

  if (!fs.existsSync(location)) {
    image.mv(location)
    image.mv(location2)
    return res.sendStatus(200)
  } else {
    res.sendStatus(418)
  }
  // res.json({imagePath: image.name})
})

const wss = new ws.Server({
  port: 5000,
}, () => console.log(`Server started on 5000`))
wss.on('connection', function connection(ws) {
  ws.on('message', function (message) {
    message = JSON.parse(message)
    switch (message.event) {
      case 'message':
        broadcastMessage(message)
        break;
      case 'connection':
        broadcastMessage(message)
        break;
    }
  })
})
function broadcastMessage(message, id) {
  wss.clients.forEach(client => {
    client.send(JSON.stringify(message))
  })
}

app.use(createErr, cathErrAndSendAnswer);

module.exports = app;
