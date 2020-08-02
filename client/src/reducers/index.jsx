import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import history from '../history';
import { cartReducer } from './cart.reducer';
import { errors } from './session.errors.reducer';
import { session } from './session.reducer';

const rootReducer = combineReducers({
 session,
 cartReducer,
 errors,
 router: connectRouter(history)
});

export default rootReducer;
