import { useNavigate } from "react-router-dom";
import "./Landing.css";
import logo from '../assets/logo.jpeg';
const Landing = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/Signup");
  };

  const handleSignIn = () => {
    navigate("/Login");
  };

  return (
    <div className="landing-container">
      <div className="card">
        <div className="icon"><img src={logo}/></div>
        <h2>Welcome to Event Viewer</h2>
        <p>Stay informed and organized with all your upcoming, ongoing, and past events. Whether you're an admin managing events or a user exploring what's next, everything you need is right here.</p>
        
        <div className="button-group">
          <button className="primary-button" onClick={handleSignUp}>
            Create account
          </button><br/>
          <button className="secondary-button" onClick={handleSignIn}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
