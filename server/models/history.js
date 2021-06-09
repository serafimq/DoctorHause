const { model, Schema, pluralize } = require('mongoose');
pluralize(null);

const historySchema = new Schema({
  prescription: String,
  imagePath: Array,
  nextDateTime: Date,
  analyzes: String,
  price: String,
  comment: String,
  date: String,
  num: Number,
  userCreator:
  {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  events:
    [{
      type: Schema.Types.ObjectId,
      ref: 'Events'
    }]
})

const History = model('History', historySchema)

module.exports = History
