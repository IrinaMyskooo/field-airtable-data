import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
