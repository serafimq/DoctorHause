const { model, Schema, pluralize } = require('mongoose');
pluralize(null);

const messageSchema = new Schema({
  text: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
})

const Message = model('Message', messageSchema)

module.exports = Message
