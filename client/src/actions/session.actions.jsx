import axios from 'axios';
import { receiveErrors } from './session.errors';
import * as types from './session.types';

const receiveCurrentUser = (user) => ({
 type: types.RECEIVE_CURRENT_USER,
 user
});

const logoutCurrentUser = () => ({
 type: types.LOGOUT_CURRENT_USER
});

export const login = (user) => async (dispatch) => {
 let res = await axios.post('/api/session', user);
 if (res.status === 200) {
  return dispatch(receiveCurrentUser(res.data));
 } else {
  return dispatch(receiveErrors(res.data));
 }
};

export const logout = () => async (dispatch) => {
 try {
  let res = await fetch('/api/session', { method: 'DELETE' });
  if (res.status === 200) {
   return dispatch(logoutCurrentUser());
  } else {
   return dispatch(receiveErrors(res.data));
  }
 } catch (error) {}
};
