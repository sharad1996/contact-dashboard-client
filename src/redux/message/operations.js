import axios from '../../axiosConfig'
import {
  setMessages,
} from './actions'

export const getMessages = () => {
  return dispatch => {
    axios.get('/message/getMessages')
      .then(res => {
        dispatch(setMessages(res.data))
      })
      .catch((err) => {
        if (err.response) console.log(err.response)
        else console.log('Something went worng')
      })
  }
}

export const sendMessage = (payload) => {
  return () => {
    axios.post('/message/sendMessage', payload)
      .catch((err) => {
        if (err.response) console.log(err.response)
        else console.log('Something went worng')
      })
  }
}
