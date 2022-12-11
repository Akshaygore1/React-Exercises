import React, { useState } from "react";
import LoggedIn from "./LoggedIn";
import "./Login.css";

const Login = () => {
  // create states 4 states username, password,ispasswordValid,errorMsg
  // ispasswordValid and ErrorMsg are type boolean
  // onchage in input tag
  // onclick on button
  //create two functions one is handle submit which will call at onclick of login button
  // if else statement in handleSUbmit button to check password and two variable user = "admin" and pass = "admin"
  // if user name password match then ispasswordValid true and else errorMsg true
  return (
    <div>
      <div className="login-page">
        <div className="form">
          <h4>Login Form </h4>
          <form className="login-form">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
          </form>
          <button>login</button>
          <p className="message">Password not mathcing</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
