import React from "react";
import logo from "../../images/logo.png";
import "./header.css";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import { useSelector } from "react-redux";

const Header = () => {
  const userData = useSelector((state) => state.auth.userName);
  // console.log(userData);
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <nav className="nav">
            <Link to={"/"}>
              {" "}
              <img className="logo" src={logo} alt="logo" />
            </Link>
            <ul className="nav-list">
              <Link to="/" className="nav-item">
                Home
              </Link>
              <div className="courses-wrap-link">
                <Link to="/courses" className="nav-item course-link">
                  Courses
                </Link>
                <div className="select-courses">
                  <Link className="nav-item-select" to="/favourite">
                    My courses
                  </Link>
                  <br />
                  <Link className="nav-item-select" to="/courses">
                    All courses
                  </Link>
                </div>
              </div>
              <li className="nav-item">Pages</li>
              {/* <li className="nav-item">Contact</li> */}
            </ul>
          </nav>
          <div className="right-content">
            <input className="header-input" type="text" />
            {userData ? (
              <Link to={"/profile"} className="user-active">
                <img
                  className="user-active-icon"
                  src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                  alt="user-icon"
                />
              </Link>
            ) : (
              <Link to="/login" className="sign-up">
                Sign up / Sign in
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
