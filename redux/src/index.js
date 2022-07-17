import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux'

import CountReducer from './Reducers/CountReducers';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Store = createStore(CountReducer)

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>   
  </React.StrictMode>
);


