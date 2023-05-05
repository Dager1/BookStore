import React, { useState } from "react";

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
    <div>
      <div>Register</div>
      <div>
        <div>Name:</div>{" "}
        <input value={name} onChange={handelNameChange}></input>
      </div>
      <div>
        <div>Email:</div>{" "}
        <input value={email} onChange={handelEmailChange}></input>
      </div>
      <div>
        <div>Password:</div>
        <input value={password} onChange={handelPasswordChange}></input>
      </div>
      <div>
        <button>Register</button>
        <link to="/Login">Already have an account?</link>
      </div>
    </div>
  );
}

export default Registeration;
