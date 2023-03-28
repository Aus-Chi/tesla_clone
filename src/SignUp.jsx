
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import LanguageIcon from "@mui/icons-material/Language";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";


function Signup() {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
 

  return (
    <div className='signup'>
       <div className="signup__header">
        <div className="signup__logo">
          <Link to="/">
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
              className="header__logo-img"
            />
          </Link>
        </div>
        <div className="signup__language">
          <LanguageIcon />
          <h3>en-US</h3>
        </div>
      </div>
      <div className="signup__info">
        <h1>Create Account</h1>
        <form className="signup__form">
        <label htmlFor="email">First Name</label>
          <input
            type="text"
            id="fname"
            value={fName}
            required
            onChange={(e) => setFName(e.currentTarget.value)}
          />
          <label htmlFor="email">Last Name</label>
          <input
            type="text"
            id="lName"
            value={lName}
            required
            onChange={(e) => setLName(e.currentTarget.value)}
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            required
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <ButtonPrimary name='create account' className="create-account--btn" type='submit'  />
        </form>
        <div className="signup__divider">
            <hr />
            <span>OR</span>
            
            <hr />
            
        </div>
        <Link to="/login">

            <ButtonSecondary name="Sign In" />
        </Link>
      </div>
    </div>
  )
}

export default Signup
