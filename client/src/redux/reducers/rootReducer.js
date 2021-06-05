import {combineReducers} from 'redux'
import doctorReducer from './doctorReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  user: userReducer,
  doctor: doctorReducer,
})

export default rootReducer
