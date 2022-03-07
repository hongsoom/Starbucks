import React, { Component } from "react";
import { beverageCardData } from "../utills/menu";
import { Route, withRouter } from "react-router-dom";
import "./MenuList.scss";

class MenuList extends Component {
  componentDidMount() {
    console.log("beverageCardData", beverageCardData);
  }
  render() {
    return (
      <div className="product">
        {beverageCardData.map((data) => {
          return (
            <div className="menudata" key={data.id}>
              <img
                src={data.img}
                alt={data.name}
                onClick={() => this.linkToDetail(data.id)}
              />
              <span>{data.name}</span>
            </div>
          );
        })}
      </div>
    );
  }

  linkToDetail = (id) => {
    this.props.history.push(`/MENU/${id}`);
  };
}
export default withRouter(MenuList);
