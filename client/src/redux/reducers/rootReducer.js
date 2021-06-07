import {combineReducers} from 'redux'
import doctorReducer from './doctorReducer'
import userReducer from './userReducer'
import eventsReducer from './eventsReducer'
import doctorsReducer from './doctorsReducer'

const rootReducer = combineReducers({
  user: userReducer,
  doctor: doctorReducer,
  doctors:doctorsReducer,
  events: eventsReducer,
})

export default rootReducer
