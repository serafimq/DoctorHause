import { combineReducers } from 'redux'
import eventsReducer from './eventsReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  user: userReducer,
  events: eventsReducer,
})

export default rootReducer
