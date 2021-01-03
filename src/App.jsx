import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Layouts from "./components/Layouts/layouts";
import BurgerBuilder from "./containers/burgerBuilder/burgerBuilder";
import Checkout from "./containers/checkout/checkout";
import Auth from "./containers/auth/auth";
import MyOrders from "./containers/myOrders/myOrders";

class App extends Component {
  state = {};
  render() {
    return (
      <Layouts>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/myorders" component={MyOrders} />
          <Route path="/auth" component={Auth} />
          <Route path="/" exact component={BurgerBuilder} />
        </Switch>
      </Layouts>
    );
  }
}

export default App;
