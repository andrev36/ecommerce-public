import { CLEAR_ERRORS, RECEIVE_ERRORS } from '../actions/session.errors';
import { RECEIVE_CURRENT_USER } from '../actions/session.types';

export const errors = (state = '', { message, type }) => {
 Object.freeze(state);
 switch (type) {
  case RECEIVE_ERRORS:
   return message;
  case RECEIVE_CURRENT_USER:
  case CLEAR_ERRORS:
   return '';
  default:
   return state;
 }
};
