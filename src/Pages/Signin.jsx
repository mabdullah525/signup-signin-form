import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <h2>Sign In to Account</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      <div className="login-option">
        Don’t have an account? <a href="#">Sign Up</a>
      </div>
    </div>
  );
};

export default Signin;
