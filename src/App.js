import React, { Component } from "react";
import { Route } from "react-router-dom";
import StarBucks from "./components/StarBucks";
import COFFEE from "./components/COFFEE";
import MENU from "./components/MENU";
import STORE from "./components/STORE";
import LOGIN from "./components/LOGIN";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={StarBucks} />
        <Route exact path="/COFFEE" component={COFFEE} />
        <Route exact path="/MENU" component={MENU} />
        <Route exact path="/STORE" component={STORE} />
        <Route exact path="/LOGIN" component={LOGIN} />
      </div>
    );
  }
}

export default App;
