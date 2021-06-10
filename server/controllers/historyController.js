const History = require('../models/history')
const Event = require('../models/events')

const setAllHistoryAxios = async (req, res) => {
  console.log(123);
  console.log(req.params, 'req.params');
  const { id } = req.params
  const allHistoryUser = await History.find().populate('events')
  const allHistoryFilter = allHistoryUser.filter(el => el.userCreator.toString() === id)
  res.json(allHistoryFilter)
}

const addOneHistoryAxios = async (req, res) => {

  try {
    const { id } = req.params
    const { history, idEvent, imagePath } = req.body;
    console.log(imagePath, 'imagePath');
    const { prescription,
      nextDateTime,
      analyzes,
      price,
      comment, } = history
    const num = String(history.nextDateTime.match(/\d{2}\s/gm)).slice(0, 2)
    // console.log(Number(num))
    const date = Date.parse(history.nextDateTime)
    const date2 = (history.nextDateTime).replace(/\//gm, "-").slice(0, 10)
    // console.log(date)

    const findEvent = await Event.findById(idEvent)
    console.log(findEvent, 'findEvent');

    if (history) {
      const newHistory = await History.create({
        prescription,
        analyzes,
        imagePath,
        price,
        comment,
        nextDateTime: date,
        date: date2,
        num,
        userCreator: id
      })
      newHistory.events.push(idEvent)
      newHistory.save()

      findEvent.history.push(newHistory)
      findEvent.save()

      return res.json(newHistory)
    }
    return res.sendStatus(500)
  } catch (error) {
    console.log('Ошибка при добавлении результата посещения', error);
  }
}

const sortPriceHistoryAxios = async (req, res) => {
  const allHistory = await History.find()
  const sortPriceHistory = allHistory.sort((a, b) => b.price - a.price)
  console.log(sortPriceHistory, 'sortPriceHistorysortPriceHistory');
  return res.json(sortPriceHistory)
}

const filterProblemHistoryAxios = async (req, res) => {
  const { problem } = req.body
  console.log(problem)
  const allHistory = await History.find().populate('events')
  // const filterProblemHistory = allHistory.filter(el => el.events.forEach(ev => return (ev.problem == problem)))
  const result = []
  const filtHistory = allHistory?.map(el => {
    const currentEl = el.events?.filter(event => event.problem === problem)
    el.events = currentEl
    console.log(el.events);
    return el
  })

  filtHistory?.forEach(el => {
    if (el.events.length) result.push(el)
  })

  console.log(result, 'result');
  return res.json(result)
}

module.exports = {
  addOneHistoryAxios,
  setAllHistoryAxios,
  sortPriceHistoryAxios,
  filterProblemHistoryAxios
}


