import React, { useState } from "react";
import "./Registeration.css";
import { Link } from "react-router-dom";

function Registeration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelNameChange = (e) => {
    setName(e.target.value);
  };
  const handelEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handelPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="registeration">
      <form>
        <div>Register</div>
        <div>
          <div>Name:</div>
          <input value={name} onChange={handelNameChange}></input>
        </div>
        <div>
          <div>Email:</div>
          <input value={email} onChange={handelEmailChange}></input>
        </div>
        <div>
          <div>Password:</div>
          <input value={password} onChange={handelPasswordChange}></input>
        </div>
        <div className="log">
          <button>Register</button>
          <Link to="/">Already have an account?</Link>
        </div>
      </form>
    </div>
  );
}

export default Registeration;
