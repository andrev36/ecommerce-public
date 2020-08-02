import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

let middleware = [thunk];

const persistConfig = {
 key: 'root',
 storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default (preloadedState) =>
 createStore(
  persistedReducer,
  preloadedState,
  compose(
   applyMiddleware(...middleware),
   (window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()) ||
    compose
  )
 );
