import React, { Component } from "react";
import Nav from "../components/Nav/Nav";
import "./main.scss";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Nav />
        <img
          className="images"
          src="https://athome.starbucks.com/sites/default/files/styles/homepage_banner_large/public/2022-02/Chai_Latte_Web_New_Header_2880x1660.jpg?h=cf77c377&itok=rJgzT1Cm"
          alt="Caramel Dirty Chai Latte"
        />
      </div>
    );
  }
}
export default Main;
