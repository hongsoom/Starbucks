import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./LoginForm.scss";

class LOGIN extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    this.setState({
      id: "",
      pw: "",
    });
    this.props.history.push("/");
  };

  render() {
    const isLoginBtnActive =
      this.state.id.includes("@") && this.state.pw.length > 4;
    return (
      <div className="form">
        <form className="input">
          <input
            className="loginId"
            type="text"
            name="id"
            placeholder="아이디 또는 이메일을 입력해주세요."
            onChange={this.handleInput}
          />
          <input
            className="loginPw"
            type="text"
            name="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={this.handleInput}
          />
          <button className="loginBt" type="button" onClick={this.handleClick}>
            로그인
          </button>
        </form>
      </div>
    );
  }
}
export default withRouter(LOGIN);
