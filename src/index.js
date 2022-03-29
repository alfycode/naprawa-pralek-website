import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MessengerButton from "./MessengerButton";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  console.log("bedzie hydrate");
  ReactDOM.hydrate(
    <React.StrictMode>
      <MessengerButton />
      <App />
    </React.StrictMode>,
    rootElement
  );
} else {
  console.log("bedzie render");

  ReactDOM.render(
    <React.StrictMode>
      <MessengerButton />
      <App />
    </React.StrictMode>,
    rootElement
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

if (module.hot) {
  module.hot.accept();
}
