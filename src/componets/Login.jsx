import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login">
      <form onClick>
        <div>Login</div>
        <div>
          <label>Email:</label>
          <input value={email} onChange={handleEmailChange}></input>
        </div>
        <div>
          <label>Password:</label>
          <input value={password} onChange={handlePasswordChange}></input>
        </div>
        <div>
          <div className="log">
            <Link to="/register">Dont have an account?</Link>
            <button>Login</button>
          </div>
          <div></div>
        </div>
      </form>
    </div>
  );
}

export default Login;
