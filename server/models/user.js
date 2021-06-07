const { model, Schema, pluralize } = require('mongoose');
pluralize(null);

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 3,
  },
  email: {
    type: String,
    required: true,
    min: 5,
    unique: true,
  },
  pass: {
    type: String,
    required: true,
    min: 8,
  },
  role: String,
  isAuth: Boolean,
  spec: String,
  stage: Number,
  phone: Number,
  metro: String,
  price: Number,
  stars: Number,
  feedback: [{
    author: String,
    text: String,
    stars: Number
  }]
})

const User = model('User', userSchema)

module.exports = User
