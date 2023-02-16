import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/globals.css";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import store from "./store/index";

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
