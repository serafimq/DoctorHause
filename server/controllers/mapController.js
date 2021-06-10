const Event = require('../models/events')
const fetch = require('node-fetch');

const setEventForMapAxios = async (req, res) => {
  console.log(req.params, 'req.params');
  const {id} = req.params
  const allEvent = await Event.find()
  console.log(allEvent, 'allEvent');
  const filterUserEvent = allEvent.filter(el => el.creator.toString() === id)
  console.log('filterUserEvent', filterUserEvent);
  let addressArr = [];
  filterUserEvent.forEach(el => addressArr.push(el.address))
  console.log('addressArr', addressArr);
  const newArrWithPlaces = []
  for (let i = 0; i < addressArr.length; i++) {
    const newAddress = encodeURI(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${addressArr[i]}&key=AIzaSyBrCV2mahsSsU2ZCwJcFTyx8EIT0oEqlj4`
    )
    const response = await fetch(newAddress)
    const result = await response.json()
    newArrWithPlaces.push({location: result.results[0].geometry.location, hospital: filterUserEvent[i].hospital, address: filterUserEvent[i].address, date: filterUserEvent[i].dateTime.toISOString().replace('-','/').replace('-','/').replace('T',' ').substring(0,16)})
  }
  console.log('newArrWithPlaces', newArrWithPlaces);
  res.json(newArrWithPlaces)
}

const getCountEventForMapAxios = async (req, res) => {
  const {count} = req.body
  const {id} = req.params
  const allEvent = await Event.find()
  const filterUserEvent = allEvent.filter(el => el.creator.toString() === id)
  const sortDateEvent = filterUserEvent.sort((a, b) => b.dateTime - a.dateTime)
  const filterDateCount = sortDateEvent.splice(0, count)
  console.log(filterDateCount, 'filterDateCount');
  let addressArr = [];
  filterDateCount.forEach(el => addressArr.push(el.address))
  console.log('addressArr', addressArr);
  const newArrWithPlaces = []
  for (let i = 0; i < addressArr.length; i++) {
    const newAddress = encodeURI(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${addressArr[i]}&key=AIzaSyBrCV2mahsSsU2ZCwJcFTyx8EIT0oEqlj4`
    )
    const response = await fetch(newAddress)
    const result = await response.json()
    newArrWithPlaces.push({location: result.results[0].geometry.location, hospital: filterDateCount[i].hospital, address: filterDateCount[i].address, date: filterDateCount[i].dateTime.toISOString().replace('-','/').replace('-','/').replace('T',' ').substring(0,16)})
  }
  console.log('newArrWithPlaces', newArrWithPlaces);
  res.json(newArrWithPlaces)
}

module.exports = {
  setEventForMapAxios,
  getCountEventForMapAxios
}