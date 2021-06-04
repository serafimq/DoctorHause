require('dotenv').config()
const express = require('express');
const app = express();
const MongoStore = require('connect-mongo');

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  poolSize: 10,
  bufferMaxEntries: 0,
}

const { DB_HOST, DB_NAME, DB_PORT, secretKey, DB_ATLAS } = process.env
const dbConnectionURL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

const sessionConfig = {
  name: app.get('cookiname'),
  secret: secretKey,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: dbConnectionURL,
  }),
  cookie: {
    path: '/',
    secure: false,
    httpOnly: true,
    maxAge: 90000 * 1e3,
  },
};

module.exports = {
  options,
  dbConnectionURL,
  sessionConfig,
  DB_ATLAS
}
