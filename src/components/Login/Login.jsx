import React, { useState } from "react";
import "./login.css";
import { Link, redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const API_URL = "http://localhost:3002/api/login";
  const logRequest = async (event) => {
    event.preventDefault();
    const response = await axios.post(API_URL, {
      email,
      password,
    });
    dispatch({ type: "token", payload: response.data.accessToken });
    dispatch({ type: "name", payload: response.data.user.email });
    navigate("/");
  };

  return (
    <div className="login-wrap">
      <div className="container-login">
        <div className="screen">
          <div className="screen__content">
            <form onSubmit={logRequest} className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  className="login__input"
                  placeholder="User name / Email"
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  className="login__input"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="button login__submit">
                <span className="button__text">Log In Now</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
              <Link to="/reg" className="button login__submit link">
                <span className="button__text">Registrate now</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </Link>
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
};

export default Login;
