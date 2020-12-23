import React, { Component } from "react";
import Burger from "../../components/burger/burger";
import Auxilary from "../../hoc/auxilary";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 2,
      salad: 1,
      bacon: 1,
      meat: 1,
    },
  };
  render() {
    return (
      <Auxilary>
        <Burger ingredients={this.state.ingredients} />
        <div className="burgercontrols">Controls</div>
      </Auxilary>
    );
  }
}

export default BurgerBuilder;
