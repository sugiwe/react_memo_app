import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MemoApp from "./MemoApp";
import { LoginProvider } from "./LoginContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginProvider>
      <MemoApp />
    </LoginProvider>
  </React.StrictMode>,
);
