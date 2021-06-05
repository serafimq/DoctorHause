const Events = require("../models/events")


const setAllEvents = async (req, res) => {
  const allEvents = await Events.find()

  res.json(allEvents)
}
const addEvent = async (req, res) => {
  try {
    const { event } = req.body;
    console.log(event)

    const { hospital,
      firstLastName,
      specialization,
      address,
      comment, } = event
    const num = String(event.dateTime.match(/\d{2}T/gm)).slice(0, 2)
    // console.log(Number(num))
    const date = Date.parse(event.dateTime)
    console.log(date)

    if (event) {
      const newEvent = await Events.create({
        hospital,
        firstLastName,
        specialization,
        address,
        comment,
        dateTime: date,
        num,
      })
      return res.json(newEvent)
    }
    return res.sendStatus(500)
  } catch (error) {
  }

  res.json()
}

module.exports = {
  setAllEvents,
  addEvent
}


