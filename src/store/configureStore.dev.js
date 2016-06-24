// This file merely configures the store for hot reloading.
// This boilerplate file is likely to be the same for each project that uses Redux.
// With Redux, the actual stores are in /reducers.

import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import CreateLogger from 'redux-logger';
import PromiseMiddleware from 'redux-promise';
import rootReducer from '../reducers';

const Logger = CreateLogger({collapsed: true});
export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(ReduxThunk, PromiseMiddleware, Logger),
    // Add other middleware on this line...
    window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
