import React from "react";

function Login() {
  return (
    <div className="login">
      <form>
        <div>Login</div>
        <div>
          <label>Email:</label>
          <input></input>
        </div>
        <div>
          <label>Password:</label>
          <input></input>
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
