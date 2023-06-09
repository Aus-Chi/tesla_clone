import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import LanguageIcon from "@mui/icons-material/Language";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  
  return (
    <div className="login">
      <div className="login__header">
        <div className="login__logo">
          <Link to="/">
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
              className="header__logo-img"
            />
          </Link>
        </div>
        <div className="login__language">
          <LanguageIcon />
          <h3>en-US</h3>
        </div>
      </div>
      <div className="login__info">
        <h1>Sign In</h1>
        <form className="login__form">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <ButtonPrimary name='Sign In' type='submit' />
        </form>
        <div className="login__divider">
            <hr />
            <span>OR</span>
            
            <hr />
            
        </div>
        <Link to="/signup">

            <ButtonSecondary name="create account" />
        </Link>
      </div>
    </div>
  );
}

export default Login;
