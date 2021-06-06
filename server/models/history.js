const { model, Schema, pluralize } = require('mongoose');
pluralize(null);

const historySchema = new Schema({
  prescription: String,
  // file: String,
  nextDateTime: Date,
  analyzes: String,
  price: String,
  comment: String,
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
