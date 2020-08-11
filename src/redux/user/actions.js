import { ADD_USER, UPDATE_USER, GET_USER, DELETE_USER, SET_IS_EDIT, SELECTED_USER, CURRENT_USER } from './types'

export const addUserData = (user) => ({
  type: ADD_USER,
  user
})

export const getUserData = (users) => ({
  type: GET_USER,
  users
})

export const updateUserData = (user, id) => ({
  type: UPDATE_USER,
  user,
  id
})

export const deleteUserData = (id) => ({
  type: DELETE_USER,
  id
})

export const setIsEdit = (isEdit, user) => ({
  type: SET_IS_EDIT,
  isEdit,
  user
})

export const setSelectedUser = (user) => ({
  type: SELECTED_USER,
  user
})

export const setCurrentUser = (user) => ({
  type: CURRENT_USER,
  user
})
