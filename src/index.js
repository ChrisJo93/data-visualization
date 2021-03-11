import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './redux/Reducers/_root.reducer';
import rootSaga from './redux/Sagas/_root.saga';

const sagaMiddleware = createSagaMiddleware();

const middleWareList =
  process.env.NODE_ENV === 'development'
    ? [sagaMiddleware, logger]
    : [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middleWareList));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
