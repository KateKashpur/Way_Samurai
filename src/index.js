import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-Store";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

//setInterval(() => {store.dispatch({type:"FAKE"})},1000);

  root.render(
    <BrowserRouter>
     
        <Provider store ={store}>
        <App />
        </Provider>
  
    </BrowserRouter>
  );

reportWebVitals();
