import React, { useState } from "react"; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import './Signup.css';

const auth = getAuth(app);

const SignupPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const createUser = async () => {
        if (!email || !password) {
            setMessage("Please fill in all fields.");
            return;
        }
        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Signup Successful!");
            navigate("/login");
        } catch (error) {
            setMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signup-page">
            <h1>Signup Page</h1>
            {message && <p style={{ color: "red" }}>{message}</p>}
            <label>Email</label>
            <input
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
                type="email"
                required
                placeholder="Enter your email"
            />
            <label>Password</label>
            <input 
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
                type="password"
                required
                placeholder="Enter your password"
            />
            <button onClick={createUser} disabled={loading}>
                {loading ? "Signing up..." : "Signup"}
            </button>

            <p style={{ marginTop: "1rem" }}>
                Already have an account? <a href="/login">Login here</a>
            </p>
        </div>
    );
};

export default SignupPage;
