const { model, Schema, pluralize } = require('mongoose');
pluralize(null);

const eventSchema = new Schema({
  problem: {
    type: String,
    required: true
  },
  hospital: String,
  firstLastName: String,
  specialization: String,
  address: String,
  comment: String,
  dateTime: Date,
  date: String,
  creator:
  {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  history: [{
    type: Schema.Types.ObjectId,
    ref: 'History'
  }]
})

const Events = model('Events', eventSchema)

module.exports = Events
