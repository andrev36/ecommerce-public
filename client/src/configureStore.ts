import { applyMiddleware, compose, createStore } from 'redux'
import { persistReducer, WebStorage } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { AppActions } from './actions/cart.types'
import rootReducer, { AppState } from './reducers'

const middleware = [thunk as ThunkMiddleware<AppState, AppActions>]

const persistConfig: {
 key: string
 storage: WebStorage
} = {
 key: 'root',
 storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Redux store configuration with a thunk middleware,
* persist (remember state after page refresh/window close) and Redux DevTools
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
export default (configureStore: AppState) =>
 createStore(
  persistedReducer,
  configureStore,
  compose(
   applyMiddleware(...middleware),
   ((window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()) ||
    compose,
  ),
 )
