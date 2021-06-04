const { connect } = require('mongoose')
const { dbConnectionURL, DB_ATLAS, options } = require('./config')
const app = require("../app");

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log('Сервер газанул ', PORT)
  connect(dbConnectionURL, options, (err) => {
    if (err) return console.log(err)
    console.log('База рванула')
  })
})

module.exports = connect
