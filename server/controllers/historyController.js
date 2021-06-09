const History = require('../models/history')

const setAllHistoryAxios = async (req, res) => {
  console.log(req.params, 'req.params');
  const {id} = req.params
  const allHistoryUser = await History.find().populate('events')
  const allHistoryFilter = allHistoryUser.filter(el => el.userCreator.toString() === id)
  console.log(allHistoryFilter, 'allHistoryFilter');
  res.json(allHistoryFilter)
}

const addOneHistoryAxios = async (req, res) => {
  console.log(req.body, '123443ithsdflmnc');
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
    // console.log(date)

    if (history) {
      const newHistory = await History.create({
        prescription,
        analyzes,
        imagePath,
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
  setAllHistoryAxios
}


