import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { Provider } from "react-redux";
import "./assets/scss/style.scss";
import reducer from "./redux/reducers/index";
import configureStore from "./redux/store/configureStore";
const store = configureStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
