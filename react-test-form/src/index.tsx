import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";

import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
