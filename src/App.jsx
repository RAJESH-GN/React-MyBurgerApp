import React, { Component } from "react";
import Layouts from "./components/Layouts/layouts";
import BurgerBuilder from "./containers/burgerBuilder/burgerBuilder";

class App extends Component {
  state = {};
  render() {
    return (
      <Layouts>
        <BurgerBuilder />
      </Layouts>
    );
  }
}

export default App;
