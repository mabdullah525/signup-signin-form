import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const AuthForm = () => {
    const [isSignup, setIsSignup] = useState(true); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // New states for extra fields
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");

    // Signup function
    const handleSignup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("✅ User Created Successfully!");
                console.log("User Info:", {
                    uid: userCredential.user.uid,
                    email,
                    firstName,
                    lastName,
                    phone,
                });
            })
            .catch((error) => {
                alert("❌ Error: " + error.message);
            });
    };

    // Login function
    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("✅ Login Successful!");
                console.log("User Info:", userCredential.user);
            })
            .catch((error) => {
                alert("❌ Error: " + error.message);
            });
    };

    return (
        <div className="container">
            <h2>{isSignup ? "Create an Account" : "Login to Account"}</h2>
            <form onSubmit={isSignup ? handleSignup : handleLogin}>

                {/* ✅ Extra fields only in Signup form */}
                {isSignup && (
                    <>
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </>
                )}

                {/* Common fields for both Signup/Login */}
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email Address"
                    required
                />
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Password"
                    required
                />
                <button type="submit">
                    {isSignup ? "Sign Up" : "Login"}
                </button>
            </form>

            <div className="login-option">
                {isSignup ? (
                    <>Already have an account?{" "}
                        <button type="button" onClick={() => setIsSignup(false)}>
                            Login
                        </button>
                    </>
                ) : (
                    <>Don't have an account?{" "}
                        <button type="button" onClick={() => setIsSignup(true)}>
                            Sign Up
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default AuthForm;
