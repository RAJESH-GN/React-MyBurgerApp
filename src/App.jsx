import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Layouts from "./components/Layouts/layouts";
import BurgerBuilder from "./containers/burgerBuilder/burgerBuilder";
import Checkout from "./containers/checkout/checkout";

class App extends Component {
  state = {};
  render() {
    return (
      <Layouts>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/" exact component={BurgerBuilder} />
        </Switch>
      </Layouts>
    );
  }
}

export default App;
