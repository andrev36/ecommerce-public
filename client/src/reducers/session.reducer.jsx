import {
 LOGOUT_CURRENT_USER,
 RECEIVE_CURRENT_USER
} from '../actions/session.types';

const sessionNull = { userId: null, username: null, isAdmin: null };
export const session = (state = sessionNull, { type, user }) => {
 Object.freeze(state);
 switch (type) {
  case RECEIVE_CURRENT_USER:
   return user;
  case LOGOUT_CURRENT_USER:
   return sessionNull;
  default:
   return state;
 }
};
