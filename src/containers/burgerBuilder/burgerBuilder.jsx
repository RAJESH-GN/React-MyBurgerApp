import React, { Component } from "react";
import Burger from "../../components/burger/burger";
import BurgerControls from "../../components/burger/burgerControls/burgerControls";
import Auxilary from "../../hoc/auxilary";

const INGREDIENTS_PRICE = {
  cheese: 0.5,
  meat: 1.3,
  salad: 0.5,
  bacon: 0.8,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 0,
      salad: 0,
      bacon: 0,
      meat: 0,
    },
    total: 4.98,
    purchasable: false,
  };

  updatePurchasable = (updatedIngredients) => {
    const ingredientsSum = Object.keys(updatedIngredients)
      .map((igkey) => updatedIngredients[igkey])
      .reduce((sum, el) => sum + el, 0);
    ingredientsSum > 0
      ? this.setState({ purchasable: true })
      : this.setState({ purchasable: false });
  };

  addIngredient = (type) => {
    const oldIngredientQty = this.state.ingredients[type];
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = oldIngredientQty + 1;
    const oldPrice = this.state.total;
    const priceAddition = INGREDIENTS_PRICE[type];
    const updatedPrice = priceAddition + oldPrice;
    console.log(updatedPrice);
    this.setState({ ingredients: updatedIngredients, total: updatedPrice });
    this.updatePurchasable(updatedIngredients);
  };

  removeIngredient = (type) => {
    const oldIngredientQty = this.state.ingredients[type];
    if (oldIngredientQty <= 0) {
      return;
    }
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = oldIngredientQty - 1;
    const oldPrice = this.state.total;
    const newPrice = oldPrice - INGREDIENTS_PRICE[type];
    this.setState({ ingredients: updatedIngredients, total: newPrice });
    this.updatePurchasable(updatedIngredients);
  };

  render() {
    const disbledInfo = { ...this.state.ingredients };
    for (let key in disbledInfo) {
      disbledInfo[key] = disbledInfo[key] <= 0;
    }
    return (
      <Auxilary>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          total={this.state.total}
          disbledInfo={disbledInfo}
          purchasable={this.state.purchasable}
          addIngredient={(type) => this.addIngredient(type)}
          removeIngredient={(type) => this.removeIngredient(type)}
        />
      </Auxilary>
    );
  }
}

export default BurgerBuilder;
