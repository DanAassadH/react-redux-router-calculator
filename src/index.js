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

import resultReducer from "./reducers/resultList";

const store = createStore(
  resultReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Nav />
      <Route path="/" component={Calculator} />
      <Route path="/list" component={OldResultsList} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
