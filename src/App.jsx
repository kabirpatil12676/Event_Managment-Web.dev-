import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./components/SignUp";
import LoginPage from "./components/Login";
import Dashboard from "./components/Dashboard/Dashboard"; // 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
      </Routes>
    </Router>
  );
}

export default App;
