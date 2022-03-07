import React, { Component } from "react";
import Nav from "../components/Nav/Nav";
import MenuBar from "./MenuBar";
import MenuList from "./MenuList";
import "./MenuMain.scss";

class menuMain extends Component {
  render() {
    return (
      <div className="listWrap">
        <div className="listContanier">
          <MenuBar />
          <div className="listProductCard">
            <MenuList />
          </div>
        </div>
      </div>
    );
  }
}
export default menuMain;
