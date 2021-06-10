const fs = require('fs');
const cors = require('cors');
const ws = require('ws');
const logger = require('morgan');
const express = require('express');
const fileUpload = require("express-fileupload");
const { sessionParser } = require('./ServDB/config');
const { createErr, cathErrAndSendAnswer } = require('./middleware/checkErrors');

const apiRouterUser = require('./routes/apiRouterUser');
const apiRouterMessage = require('./routes/apiRouterMessage');
const apiRouterEvents = require('./routes/apiRouterEvents');
const apiRouterDoctor = require('./routes/apiRouterDoctor');
const apiRouterHistory = require('./routes/apiRouterHistory');
const apiRouterMap = require('./routes/apiRouterMap');
const apiRouterHomepage = require('./routes/apiRouterHomepage');

const app = express();

app.set('trust proxy', 1);
app.set('cookieName', 'connect.sid');

app.use(logger('dev'));
app.use(express.json());
app.use(sessionParser);
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(logger('common', { stream: fs.createWriteStream('./access.log', { flags: 'a' }) }));
app.use(fileUpload())

app.use('/api/v1/message', apiRouterMessage);
app.use('/api/v1/doctors', apiRouterDoctor)
app.use('/api/v1/user', apiRouterUser);
app.use('/api/v1/events', apiRouterEvents);
app.use('/api/v1/history', apiRouterHistory);
app.use('/api/v1/homepage', apiRouterHomepage);
app.use('/api/v1/map', apiRouterMap);

app.use(createErr, cathErrAndSendAnswer);

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

module.exports = app;
