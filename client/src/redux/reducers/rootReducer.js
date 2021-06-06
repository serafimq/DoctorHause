import { combineReducers } from 'redux'
import eventsReducer from './eventsReducer'
import historyReducer from './historyReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  user: userReducer,
  events: eventsReducer,
  history: historyReducer
})

export default rootReducer
