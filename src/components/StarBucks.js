import React, { Component } from "react";
import Nav from "./Nav";
import "./StarBucks.scss";

class StarBucks extends Component {
  render() {
    return (
      <div>
        <Nav />
        <img
          className="main"
          src="https://athome.starbucks.com/sites/default/files/styles/homepage_banner_xlarge/public/2022-03/CAH_Header_Assets_Homepage_Header_2880x1660_B.jpg?h=cf77c377&itok=ipEM8Tm3"
          alt=""
        />
      </div>
    );
  }
}
export default StarBucks;
