import axios from 'axios'
import { Dispatch } from 'react'
import storage from 'redux-persist/lib/storage'
import { Session } from '../components/global/InterfacesTS/session.interface'
import * as types from './session.types'

const receiveCurrentUser = (user: Session): types.SessionActionTypes => ({
 type: types.RECEIVE_CURRENT_USER,
 user,
})

const logoutCurrentUser = (): types.SessionActionTypes => ({
 type: types.LOGOUT_CURRENT_USER,
})

export const login = (user: { email: string; password: string }) => async (
 dispatch: Dispatch<types.AppActions>,
) => {
 const res = await axios.post('/api/session', user)
 if (res.status === 200) {
  return dispatch(receiveCurrentUser(res.data))
 }
}

export const logout = () => async (dispatch: Dispatch<types.AppActions>) => {
 try {
  const res = await fetch('/api/session', { method: 'DELETE' })
  await storage.removeItem('persist:root')
  if (res.status === 200) {
   return dispatch(logoutCurrentUser())
  }
 } catch (error) {}
}
