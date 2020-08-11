import {
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
  GET_USER,
  SET_IS_EDIT,
  SELECTED_USER,
  CURRENT_USER
} from './types'

const initialState = {
  users: [],
  isEdit: false,
  editedUser: {},
  currentUser: {},
  selectedUser: {}
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
    case SELECTED_USER:
      return {
        ...state,
        selectedUser: action.user
      }
    case CURRENT_USER:
      return {
        ...state,
        currentUser: action.user
      }
    default:
      return state
  }
}

export default userReducer