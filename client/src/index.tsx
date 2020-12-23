import * as Sentry from '@sentry/browser'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Persistor, persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import configureStore from './configureStore'
import * as serviceWorker from './serviceWorker'
import { checkLoggedIn } from './util/session.utils'

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Error monitoring tool
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
Sentry.init({
 dsn: process.env.REACT_APP_SENTRY_API_KEY,
})

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Render App with Redux state and persist state after
* page refresh
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const renderApp = (preloadedState: any): void => {
 const store = configureStore(preloadedState)
 const persistor: Persistor = persistStore(store)

 ;(window as any).getState = store.getState

 ReactDOM.render(
  <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
     <App />
    </BrowserRouter>
   </PersistGate>
  </Provider>,
  document.getElementById('root'),
 )
}

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Check if user is logged in on every render
* - version to use with FULLSTACK
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
;(async () => renderApp(await checkLoggedIn()))()

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE RenderApp without checking if user is logged in
* - version to use with React only
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// renderApp({});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
