import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { ResultContextProvider } from "./contexts/RestultContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResultContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ResultContextProvider>
  </React.StrictMode>
);
