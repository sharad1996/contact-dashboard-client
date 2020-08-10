import {
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
  GET_USER,
  SET_IS_EDIT
} from './types'

const initialState = {
  currentUser: {},
  users: [],
  isLoading: false,
  isEdit: false,
  editedUser: {}
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.user],
      }
    case GET_USER:
      return {
        ...state,
        users: action.users,
      }
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map(user => {
          if (user._id === action.id) {
            return { ...action.user }
          };
          return user;
        })
      }
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user._id !== action.id)
      }

    case SET_IS_EDIT:
      return {
        ...state,
        isEdit: action.isEdit,
        editedUser: action.user
      }
    default:
      return state
  }
}

export default userReducer