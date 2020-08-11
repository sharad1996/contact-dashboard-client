import { IS_SENDING, SET_MESSAGE } from './types'

export const setIsSending = (isSending) => ({
  type: IS_SENDING,
  isSending
})

export const setMessages = (messages) => ({
  type: SET_MESSAGE,
  messages
})
