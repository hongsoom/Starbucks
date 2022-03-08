import React, { Component } from "react";
import LoginForm from "./LoginForm";
import LoginTitle from "./LoginTitle";

class Login extends Component {
  render() {
    return (
      <div className="loginWrap">
        <div className="loginContainer">
          <LoginTitle />
          <LoginForm />
        </div>
      </div>
    );
  }
}
export default Login;
