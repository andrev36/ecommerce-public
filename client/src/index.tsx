// * FREE FOR WHILE STUDENT FROM 2.11.2019 TOOL FOR ERROR MONITORING
import * as Sentry from '@sentry/browser';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import configureStore from './configureStore';
import history from './history';
import * as serviceWorker from './serviceWorker';
import { checkLoggedIn } from './util/session.utils';

// * FREE FOR WHILE STUDENT FROM 2.11.2019 TOOL FOR ERROR MONITORING
Sentry.init({
 dsn: process.env.REACT_APP_SENTRY_API_KEY
});

const renderApp: any = (preloadedState: any) => {
 const store = configureStore(preloadedState);
 const persistor: any = persistStore(store);

 // FOR TESTING NOT PRODUCTION
 // if (process.env.REACT_APP_NODE_ENV === 'development') {
 //   return ((window as any).getState = store.getState);
 // } else {
 //   return null;
 // }

 (window as any).getState = store.getState;

 ReactDOM.render(
  <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>
    <Router history={history}>
     <App />
    </Router>
   </PersistGate>
  </Provider>,
  document.getElementById('root')
 );
};

// * NOTE version to use with FULLSTACK
(async () => renderApp(await checkLoggedIn()))();

// * NOTE version to use with React only
// renderApp({});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
