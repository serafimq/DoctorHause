const { connect } = require('mongoose')
const { dbConnectionURL, DB_ATLAS, options, sessionParser } = require('./config')
const app = require("../app");
const http = require('http');
const WebSocket = require('ws');
const User = require('../models/user')
const Message = require('../models/message')
const server = http.createServer(app)
const PORT = process.env.PORT || 3006;
const map = new Map()
const wss = new WebSocket.Server({ clientTracking: false, noServer: true })

server.listen(PORT, () => {
  console.log('Сервер газанул ', PORT)
  connect(dbConnectionURL, options, (err) => {
    if (err) return console.log(err)
    console.log('База рванула')
  })
})
