import { combineReducers } from 'redux'
import eventsReducer from './eventsReducer'
import userReducer from './userReducer'
import avatarReducer from './avatarReducer'

const rootReducer = combineReducers({
  user: userReducer,
  events: eventsReducer,
  avatar: avatarReducer,
})

export default rootReducer
