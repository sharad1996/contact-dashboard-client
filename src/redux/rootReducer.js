import { combineReducers } from 'redux'

// import reviewReducer from './Review/Reducers'
import messageReducer from './message/reducer'
import userReducer from './user/reducer'

const rootReducer = combineReducers({
  // reviewReducer, 
  userReducer,
  messageReducer
})

export default rootReducer