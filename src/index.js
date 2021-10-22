import React from "react";
import ReactDOM from "react-dom";
// import App from '../App';
import App from "../src/App";
import { ContextProvider } from "./context/Context";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
