import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase, { FirebaseContext } from "./firebase";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
