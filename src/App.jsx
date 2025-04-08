import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./components/Signup";
import LoginPage from "./components/Login";
import AdminDashboard from "./Dashboard/AdminDashboard";
import UserDashboard from "./Dashboard/UserDashboard";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
