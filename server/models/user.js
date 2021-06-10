const { model, Schema, pluralize } = require('mongoose');
pluralize(null);

const userSchema = new Schema({
  googleId: {
    required: false,
    type: String
  },
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
    required: false,
    min: 8,
  },
  role: String,
  isAuth: Boolean,
  avatar: String,
  spec: String,
  stage: Number,
  phone: Number,
  metro: String,
  price: Number,
  stars: Number,
  feedBack: [{
    author: String,
    // author: {type: Schema.Types.ObjectId,ref: 'User'},
    text: String,
    stars: Number
  }],
  approved: Boolean
})

const User = model('User', userSchema)

module.exports = User
