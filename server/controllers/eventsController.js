const Events = require("../models/events")
const History = require("../models/history")


const setAllEvents = async (req, res) => {
  const { id } = req.params
  const allEvents = await Events.find({ creator: id }).populate('history')
  const filterEvent = allEvents.filter(el => el.creator == id)

  // console.log(filterEvent)

  res.json(allEvents)
}

const addEvent = async (req, res) => {
  console.log(999);
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
      console.log(newEvent, 'newEvent');
      
      return res.json(newEvent)
    }
    return res.sendStatus(500)
  } catch (error) {
  }
}

const deleteOneEvent = async (req, res) => {
  // const { id } = req.params
  const { idEvent } = req.body
  try {
    const deleteEvent = await Events.findByIdAndDelete(idEvent)
    return res.json(deleteEvent._id)
  } catch (error) {
    console.log('Ошибка в удалении конкретных записей', error);
  }
}

const findOneEvent = async (req, res) => {
  const { id } = req.params
  const { date } = req.body
  try {
    const allEvent = await Events.find().populate('history')
    const newDate = date.replace(/\//g, '-')
    const onePersonEvent = allEvent.filter(el => el.creator == id)
    let dataString = onePersonEvent.filter(el => el.dateTime.toISOString().slice(0, 10).replace('-', '/').replace('-', '/') == date)
    const allHistory = await History.find({date: newDate, userCreator: id},{events:1, _id:0})
    let allIdis = []
    const findEventWithId = []

    if (allHistory.length) {
      allHistory.forEach(el => {allIdis = [...allIdis, ...el.events]})
      let result = await Events.find({_id: {$in: allIdis}}).populate('history')

      dataString = [...dataString, ...result]

    }
    
    return res.json({ arr: dataString })
  } catch (error) {
    console.log('Ошибка в загрузке конкретных записей', error);
  }
}

module.exports = {
  setAllEvents,
  addEvent,
  findOneEvent,
  deleteOneEvent
}


