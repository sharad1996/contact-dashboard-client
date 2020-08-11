import {
  IS_SENDING,
  SET_MESSAGE
} from './types'

const initialState = {
  messages: [],
  isSending: false,
}

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_SENDING:
      return {
        ...state,
        isSending: action.isSending
      }
    case SET_MESSAGE:
      return {
        ...state,
        messages: action.messages
      }
    default:
      return state
  }
}

export default messageReducer