import { combineReducers } from 'redux'

// import reviewReducer from './Review/Reducers'
import employeesReducer from './employee/reducer'
import userReducer from './user/reducer'

const rootReducer = combineReducers({
  // reviewReducer, 
  userReducer,
  employeesReducer
})

export default rootReducer