import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div className="login">
      <form onClick>
        <div>Login</div>
        <div>
          <label>Email:</label>
          <input value={email}></input>
        </div>
        <div>
          <label>Password:</label>
          <input value={password}></input>
        </div>
        <div>
          <div>
            <a>Dont have an account?</a>
          </div>
          <div>
            <button>Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
