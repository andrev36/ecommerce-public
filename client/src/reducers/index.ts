import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import history from '../history'
import { cartReducer } from './cart.reducer'
import { session } from './session.reducer'

const rootReducer = combineReducers({
 session,
 cartReducer,
 router: connectRouter(history),
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
