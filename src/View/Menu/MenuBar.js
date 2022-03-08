import React, { Component } from "react";
import "./MenuBar.scss";

class MenuBar extends Component {
  render() {
    return (
      <header className="MenuBar">
        <p className="MenuTitle">티(티바나)</p>
        <img
          className="MenuIcon"
          src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
          alt=""
        />
        <p className="MenuExplain">
          디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
        </p>
      </header>
    );
  }
}
export default MenuBar;
