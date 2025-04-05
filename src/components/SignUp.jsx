import React, { useState } from "react"; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";


const auth = getAuth(app);

const SignupPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const createUser = async () => {
        if (!email || !password) {
            setMessage("Please fill in all fields.");
            return;
        }
        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);

        } catch (error) {
            setMessage(error.message);
        } finally {
            setLoading(false);
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

        </div>
    );
};

export default SignupPage;
