import { combineReducers } from 'redux'
import eventsReducer from './eventsReducer'
import historyReducer from './historyReducer'
import userReducer from './userReducer'
import avatarReducer from './avatarReducer'

const rootReducer = combineReducers({
  user: userReducer,
  events: eventsReducer,
  avatar: avatarReducer,
  history: historyReducer,
})

export default rootReducer
