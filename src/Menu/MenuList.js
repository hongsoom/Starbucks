import React, { Component } from "react";
import { beverageCardData } from "../utills/menu";
import { Route, withRouter } from "react-router-dom";
import "./MenuList.scss";

class MenuList extends Component {
  componentDidMount() {
    console.log("beverageCardData", beverageCardData);
  }

  linkToDetail = (id) => {
    this.props.history.push(`/MENU/${id}`);
  };

  render() {
    return (
      <div className="product">
        {beverageCardData.map((data) => {
          return (
            <div className="menudata" key={data.id}>
              <dl>
                <dt>
                  <img
                    src={data.img}
                    alt={data.name}
                    onClick={() => this.linkToDetail(data.id)}
                  />
                  <span>{data.name}</span>
                </dt>
              </dl>
            </div>
          );
        })}
      </div>
    );
  }
}
export default withRouter(MenuList);
