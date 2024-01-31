import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Studio from './components/Studio.tsx';
import "./index.css";
import Context from "./ThemeContext.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/studio" element={<Studio/>}/>
        </Routes>
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);
