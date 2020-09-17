import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { createStore } from "redux";
import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

import Calculator from "./components/Calculator";
import OldResultsList from "./components/OldResultsList";
import Nav from "./components/Nav";
import SingleFieldCalculator from './components/ExpressionCalculator'

import resultReducer from "./reducers/resultList";
import Home from "./components/Home";


const store = createStore(
  resultReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Nav />
      <Route path="/" component={Home} exact />
      <Route path="/calculator" component={Calculator} />
      <Route path="/expressionCalculator" component={SingleFieldCalculator} />
      <Route path="/list" component={OldResultsList} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
