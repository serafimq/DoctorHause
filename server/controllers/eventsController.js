const Events = require("../models/Events")


const setAllEvents = async (req, res) => {
  console.log('Мы тут!')

  const allEvents = await Events.find()
  res.json(allEvents)
}

module.exports = {
  setAllEvents
}
