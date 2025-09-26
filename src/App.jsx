import React, { useState } from "react";
import { app } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";

const auth = getAuth(app);

const App = () => {
  // ✅ Hook ko component ke andar rakho
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {showLogin ? (
        <Signin switchToSignup={() => setShowLogin(false)} />
      ) : (
        <Signup switchToLogin={() => setShowLogin(true)} />
      )}
    </div>
  );
};

export default App;
