import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Main from "./Main/main";
import COFFEE from "./Coffee/COFFEE";
import MENU from "./Menu/Menu";
import STORE from "./components/STORE";
import LOGIN from "./components/LOGIN";

class App extends Component {
  render() {
    return (
      <div>
        <div className="list">
          <Nav />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/COFFEE" component={COFFEE} />
            <Route exact path="/MENU" component={MENU} />
            <Route exact path="/STORE" component={STORE} />
            <Route exact path="/LOGIN" component={LOGIN} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
