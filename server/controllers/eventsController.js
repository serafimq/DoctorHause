const Events = require("../models/events")

const setAllEvents = async (req, res) => {
  const { id } = req.params
  const allEvents = await Events.find()
  const filterEvent = allEvents.filter(el => el.creator == id)

  res.json(filterEvent)
}

const addEvent = async (req, res) => {
  try {
    const { event, id } = req.body;
    const { problem,
      hospital,
      firstLastName,
      specialization,
      address,
      comment, } = event

    const date1 = Date.parse(event.dateTime)
    const date2 = (event.dateTime).replace(/\//gm, "-").slice(0, 10)

    if (event) {
      const newEvent = await Events.create({
        problem,
        hospital,
        firstLastName,
        specialization,
        address,
        comment,
        dateTime: date1,
        date: date2,
        creator: id
      })
      return res.json(newEvent)
    }
    return res.sendStatus(500)
  } catch (error) {
  }
}

const findOneEvent = async (req, res) => {
  const { id } = req.params
  const { date } = req.body
  try {
    const allEvent = await Events.find()
    const onePersonEvent = allEvent.filter(el => el.creator == id)
    console.log('onePersonEvent', onePersonEvent)
    const dataString = onePersonEvent.filter(el => el.dateTime.toISOString().slice(0, 10).replace('-', '/').replace('-', '/') == date)
    console.log('dataString', dataString);
    return res.json({ arr: dataString })
  } catch (error) {
    console.log('Ошибка в загрузке конкретных записей', error);
  }
}

const addImageFile = (req, res) => {
  const { image } = req.files
  console.log('image', image);
  if (!fs.existsSync(`${__dirname}/client/public/img/${image.name}`.replace("/server", ""))) {
    const location = `${__dirname}/client/public/img/${image.name}`.replace("/server", "")
    const location2 = `${__dirname}/public/img/${image.name}`
    image.mv(location)
    image.mv(location2)
  }
  return res.sendStatus(200)
}

module.exports = {
  setAllEvents,
  addEvent,
  findOneEvent,
  addImageFile
}
