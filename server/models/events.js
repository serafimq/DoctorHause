const { model, Schema, pluralize } = require('mongoose');
pluralize(null);

const eventSchema = new Schema({
  hospital: String,
  firstLastName: String,
  specialization: String,
  address: String,
  comment: String,
  dateTime: Date,
})

const Events = model('Events', eventSchema)

module.exports = Events
