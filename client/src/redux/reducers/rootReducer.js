import {combineReducers} from 'redux'
import doctorReducer from './doctorReducer'
import userReducer from './userReducer'
import eventsReducer from '../reducers/eventsReducer'

const rootReducer = combineReducers({
  user: userReducer,
  doctor: doctorReducer,
  events: eventsReducer,
})

export default rootReducer
