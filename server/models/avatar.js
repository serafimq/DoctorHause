const { model, Schema, pluralize } = require('mongoose');

const avatarSchema = new Schema({
  avatar: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }

})

const Avatar = model('Avatar', avatarSchema)

module.exports = Avatar
