const History = require('../models/history')

// const setAllEvents = async (req, res) => {
//   console.log(req.params, 'req.params');
//   const {id} = req.params
//   const allEvents = await Events.find()
//   const filterEvent = allEvents.filter(el => el.creator == id)
//   res.json(filterEvent)
// }

const addOneHistoryAxios = async (req, res) => {
  console.log(req.body, '123443ithsdflmnc');
  try {
    const { id } = req.params
    const { history, idEvent } = req.body;
    const { prescription,
      nextDateTime,
      analyzes,
      price,
      comment, } = history
    const num = String(history.nextDateTime.match(/\d{2}\s/gm)).slice(0, 2)
    // console.log(Number(num))
    const date = Date.parse(history.nextDateTime)
    // console.log(date)

    if (history) {
      const newHistory = await History.create({
        prescription,
        analyzes,
        price,
        comment,
        nextDateTime: date,
        num,
        userCreator: id
      })
      newHistory.events.push(idEvent)
      newHistory.save()
      console.log('newHistory', newHistory);
      return res.json(newHistory)
    }
    return res.sendStatus(500)
  } catch (error) {
    console.log('Ошибка при добавлении результата посещения', error);
  }
}

module.exports = {
  addOneHistoryAxios,
}


