import React from "react";
import "./LoginForm.css";

function Loginform() {
  return (
    <div className="wrapper">
      <form className="form" action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Email" required />
          <i class="bx bxs-envelope"></i>
        </div>
        <div className="input-box">
          <input type="password" placeholder="password" required />
          <i class="bx bxs-lock-alt"></i>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Loginform;
