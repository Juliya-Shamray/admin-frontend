import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "modern-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <React.StrictMode> */}
    <App />
    <GlobalStyle />
    <ToastContainer position="top-right" autoClose={2000} />

    {/* </React.StrictMode> */}
  </>
);
