import React, { Component } from "react";
import { Route } from "react-router-dom";
import Main from "./Main/main";
import COFFEE from "./Coffee/COFFEE";
import MENU from "./Menu/menu";
import STORE from "./components/STORE";
import LOGIN from "./components/LOGIN";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Main} />
        <Route exact path="/COFFEE" component={COFFEE} />
        <Route exact path="/MENU" component={MENU} />
        <Route exact path="/STORE" component={STORE} />
        <Route exact path="/LOGIN" component={LOGIN} />
      </div>
    );
  }
}

export default App;
