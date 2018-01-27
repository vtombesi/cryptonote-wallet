import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage: storage,
}

// import { PersistGate } from 'babel-loader!redux-persist/es/integration/react';

import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes';
import thunk from 'redux-thunk';

require("babel-core/register");
require("babel-polyfill");

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
		<Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);

