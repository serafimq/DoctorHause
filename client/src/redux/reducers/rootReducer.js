import { combineReducers } from 'redux'
import doctorReducer from './doctorReducer'
import doctorsReducer from './doctorsReducer'
import eventsReducer from './eventsReducer'
import historyReducer from './historyReducer'
import userReducer from './userReducer'
import avatarReducer from './avatarReducer'
import addressReducer from './addressReducer'

const rootReducer = combineReducers({
  user: userReducer,
  doctor: doctorReducer,
  doctors:doctorsReducer,
  events: eventsReducer,
  avatar: avatarReducer,
  history: historyReducer,
  address: addressReducer,
})

export default rootReducer
