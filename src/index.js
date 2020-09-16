import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore } from 'redux';
import {Provider} from 'react-redux';


import Calculator from './components/Calculator'
import OldResultsList from './components/OldResultsList'

import resultReducer from './reducers/resultList';


const store = createStore (resultReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



ReactDOM.render(
  <Provider store={store}>

    <Calculator/>
   
    <OldResultsList/>
 

   
  </Provider>,
  document.getElementById('root')
);


