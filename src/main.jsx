import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import VerifyEmail from "./components/VerifyEmail"; // ✅ Add this

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<App />} />
        <Route path="/verify-email" element={<VerifyEmail />} /> {/* ✅ New route */}
      </Routes>
    </Router>
  </React.StrictMode>
);
