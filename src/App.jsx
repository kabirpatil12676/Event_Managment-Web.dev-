import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Event Management System</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default App;
