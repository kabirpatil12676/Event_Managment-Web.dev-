import React, { useState } from "react"; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";  // 👈 Import useNavigate
import './Signup.css';

const auth = getAuth(app);

const SignupPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // 👈 Initialize useNavigate

    const createUser = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Signup Successful!");
            navigate("/login"); // 👈 Redirect to Login after signup
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="signup-page">
            <h1>Signup Page</h1>
            <label>Email</label>
            <input
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
                type="email" 
                required 
                placeholder="Enter your email here"
            />
            <label>Password</label>
            <input 
                onChange={(e) => setPassword(e.target.value)} 
                value={password} 
                type="password" 
                required 
                placeholder="Enter your password here" 
            />
            <button onClick={createUser}>Signup</button>

            <p style={{ marginTop: "1rem" }}>
                Already have an account? <a href="/login">Login here</a>
            </p>
        </div>
    );
};

export default SignupPage;
