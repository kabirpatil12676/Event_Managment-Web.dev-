import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase';
import './Login.css';

const auth = getAuth(app);

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");  // State for error messages

    const signinUser = async () => {
        setError(""); // Clear any previous errors
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Signin success");
            alert("Sign-in successful!");
        } catch (err) {
            console.error("Signin failed: ", err.message);
            setError(err.message);  // Update error state
        }
    };

    return (
        <div className="signin-page">
            <h1>Login Page</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}  {/* Show error if any */}
            <label>Enter your Email</label>
            <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Enter your email here"
            />
            <label>Enter your Password</label>
            <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Enter your password here"
            />
            <button onClick={signinUser}>Login</button>
        </div>
    );
};

export default Login;
