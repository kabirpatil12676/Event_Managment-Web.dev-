import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "../firebase";
import "./Login.css";

const auth = getAuth(app);

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loginUser = async () => {
    setMessage("");

    if (!email || !password) {
      setMessage("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (!userCredential.user.emailVerified) {
        setMessage("Please verify your email before logging in.");
        return;
      }
      navigate("Dashboard"); // or "/admin-dashboard" based on role
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-page">
      <h1>Login</h1>

      <label>Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={loginUser} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>

      {message && <p style={{ color: "red", marginTop: "12px" }}>{message}</p>}
    </div>
  );
};

export default LoginPage;
