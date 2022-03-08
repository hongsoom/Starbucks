import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Main from "./View/Main/main";
import COFFEE from "./View/Coffee/COFFEE";
import MENU from "./View/Menu/Menu";
import STORE from "./View/Store/STORE";
import LOGIN from "./View/Login/Login";
import MenuDetail from "./View/Menu/MenuDetail";

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
            <Route exact path="/MENU/:id" component={MenuDetail} />
            <Route exact path="/STORE" component={STORE} />
            <Route exact path="/LOGIN" component={LOGIN} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
