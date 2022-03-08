import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MenuMain from "./MenuMain";

class Menu extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/MENU" component={MenuMain} />
        </Switch>
      </div>
    );
  }
}
export default Menu;
