import axios, { Axios } from "axios";
import React, { useRef, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import "./reg.css";

function Reg() {
  const navigate = useNavigate();
  const REG_URL = `http://localhost:3002/api/registration`;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authReg = (event) => {
    event.preventDefault();
    axios.post(REG_URL, {
      email,
      password,
    });
    navigate("/login");
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passHandler = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div className="login-wrap">
      <div className="container-login">
        <div className="screen">
          <div className="screen__content">
            <form onSubmit={authReg} className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input"
                  placeholder="User name / Email"
                  onChange={emailHandler}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  onChange={passHandler}
                />
              </div>

              <button type="submit" className="button login__submit link">
                <span className="button__text">Sign up</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
            <div className="social-login"></div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reg;
