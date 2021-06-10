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

// server.on('upgrade', (request, socket, head) => {
//   console.log('Parsing session from request...')
//   sessionParser(request, {}, () => {
//     if (!request.session?.user?.id) {
//       socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n')
//       socket.destroy()
//       return
//     }
//     console.log('Session is parsed!')
//     wss.handleUpgrade(request, socket, head, (ws) => {
//       wss.emit('connection', ws, request)
//     })
//   })
// })

// wss.on('connection', (ws, request) => {
//   const { id: userId, name } = request.session.user
//   map.set(userId, ws)
//   ws.on('message', (message) => {
//     const parseIncomingMessage = JSON.parse(message)
//     switch (parseIncomingMessage.type) {
//       case 'greeting':
//         User.findById(userId).then((user) => {
//           for (const [id, clientConnection] of map) {
//             if (clientConnection.readyState === WebSocket.OPEN) {
//               const messageToUsers = {
//                 type: parseIncomingMessage.type,
//                 payload: {
//                   userName: user.name,
//                 },
//               }
//               clientConnection.send(JSON.stringify(messageToUsers))
//             }
//           }
//         })
//         break
//       case 'newMessage':
//         Message.create({
//           text: parseIncomingMessage.payload.message,
//           user: userId,
//         }).then((message) => {
//           for (const [id, clientConnection] of map) {
//             if (clientConnection.readyState === WebSocket.OPEN) {
//               const messageToUsers = {
//                 type: parseIncomingMessage.type,
//                 payload: {
//                   userName: name,
//                   message: message.text,
//                 },
//               }
//               if (clientConnection === ws && clientConnection.readyState === WebSocket.OPEN) {
//                 messageToUsers.payload.itself = true
//               }
//               clientConnection.send(JSON.stringify(messageToUsers))
//             }
//           }
//         })
//       default:
//         break
//     }
//     console.log(`Received message ${message} from user ${userId}`)
//   })

//   ws.on('close', () => {
//     map.delete(userId)
//   })
// })

module.exports = connect
