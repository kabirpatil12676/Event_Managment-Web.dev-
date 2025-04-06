import React, { useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
} from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import './Signup.css';

const auth = getAuth(app);

const SignupPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const createUser = async () => {
        setMessage("");

        if (!name || !email || !password || !confirmPassword) {
            setMessage("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            setMessage("Passwords do not match.");
            return;
        }

        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await sendEmailVerification(userCredential.user);
            alert("Registration successful! Please verify your email before logging in.");
            navigate("/verify-email"); // Optional: create a separate page to show verification message
        } catch (error) {
            setMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signup-page">
            <h1>Registration Page</h1>
            {message && <p style={{ color: "red" }}>{message}</p>}
            
            <label>Name</label>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

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

            <label>Confirm Password</label>
            <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button onClick={createUser} disabled={loading}>
                {loading ? "Registering..." : "Register"}
            </button>

            <p style={{ marginTop: "1rem" }}>
                Already have an account? <a href="/login">Login here</a>
            </p>
        </div>
    );
};

export default SignupPage;
