import { useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/SignUp");
  };

  const handleSignIn = () => {
    navigate("/Login");
  };

  return (
    <div className="landing-container">
      <div className="card">
        <div className="icon">WIT LOGO WILL COME HERE</div>
        <h2>Welcome to TPO website</h2>
        <p>SIMPLE DISCRIPTION ABOUT WEBSITE.......</p>
        <p>CREATE A NEW ACCOUNT OR REGISTER NOW</p>
        
        <div className="button-group">
          <button className="primary-button" onClick={handleSignUp}>
            Create account
          </button><br/>
          <button className="secondary-button" onClick={handleSignIn}>
            Login if already registered
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
