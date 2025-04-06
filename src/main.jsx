import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Landing from "./components/Landing"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />   
        <Route path="/SignUp" element={<SignUp />} /> 
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
