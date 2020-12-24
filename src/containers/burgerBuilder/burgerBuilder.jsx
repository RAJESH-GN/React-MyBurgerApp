import React, { Component } from "react";
import Auxilary from "../../hoc/auxilary";
import Burger from "../../components/burger/burger";
import BurgerControls from "../../components/burger/burgerControls/burgerControls";
import Modal from "../../components/modal/modal";
import OrderDetails from "../../components/burger/orderDetails/orderDetails";
import Button from "../../UI/button/button";

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
    purchasing: false,
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

  handlePurchase = () => {
    console.log("Opening popup");
    this.setState({ purchasing: true });
  };

  handleClosePopup = () => {
    this.setState({ purchasing: false });
  };

  handleCheckout = () => {
    alert("You can continue with your order");
  };

  render() {
    const disbledInfo = { ...this.state.ingredients };
    for (let key in disbledInfo) {
      disbledInfo[key] = disbledInfo[key] <= 0;
    }
    return (
      <Auxilary>
        <Burger ingredients={this.state.ingredients} />
        <Modal show={this.state.purchasing} closePopup={this.handleClosePopup}>
          <OrderDetails
            ingredients={this.state.ingredients}
            price={this.state.total}
          />
          <Button clicked={this.handleClosePopup} btnType="Danger">
            Cancel
          </Button>
          <Button clicked={this.handleCheckout} btnType="Success">
            Continue
          </Button>
        </Modal>
        <BurgerControls
          total={this.state.total}
          disbledInfo={disbledInfo}
          purchasable={this.state.purchasable}
          handlePurchase={this.handlePurchase}
          addIngredient={(type) => this.addIngredient(type)}
          removeIngredient={(type) => this.removeIngredient(type)}
        />
      </Auxilary>
    );
  }
}

export default BurgerBuilder;
