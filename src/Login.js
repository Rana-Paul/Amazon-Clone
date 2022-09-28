import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const login = (e) => {
    e.preventDefault();
  };
  const register = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <Link to={"/"}>
        <img
          className="login__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG21.png"
        />
      </Link>
      <div className="login__container">
        <h1>Sing In</h1>
        <form>
          <h5>E-mail</h5>
          <input type={"text"} />
          <h5>Password</h5>
          <input type={"password"} />

          <button onClick={login} type="submit" className="login__singInButton">
            Sing In
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
