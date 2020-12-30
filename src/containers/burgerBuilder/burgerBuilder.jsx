import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Auxilary from "../../hoc/auxilary";
import Burger from "../../components/burger/burger";
import BurgerControls from "../../components/burger/burgerControls/burgerControls";
import Modal from "../../components/modal/modal";
import OrderDetails from "../../components/burger/orderDetails/orderDetails";
import axios from "./../../axios-order";
import Button from "../../UI/button/button";
import withErrorHandler from "./../../hoc/withErrorHandler/withErrorHandler";
import * as actionType from "./../../store/actions/actions";
import { connect } from "react-redux";

const INGREDIENTS_PRICE = {
  cheese: 0.5,
  meat: 1.3,
  salad: 0.5,
  bacon: 0.8,
};

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
  };

  updatePurchasable = (updatedIngredients) => {
    const ingredientsSum = Object.keys(this.props.ingredients)
      .map((igkey) => updatedIngredients[igkey])
      .reduce((sum, el) => sum + el, 0);
    return ingredientsSum > 0;
  };
  /* 
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
  }; */

  /*  removeIngredient = (type) => {
    const oldIngredientQty = this.props.ingredients[type];
    if (oldIngredientQty <= 0) {
      return;
    }
    const updatedIngredients = { ...this.props.ingredients };
    updatedIngredients[type] = oldIngredientQty - 1;
    const oldPrice = this.state.total;
    const newPrice = oldPrice - INGREDIENTS_PRICE[type];
    this.setState({ ingredients: updatedIngredients, total: newPrice });
    this.updatePurchasable(updatedIngredients);
  }; */

  handlePurchase = () => {
    this.setState({ purchasing: true });
  };

  handleClosePopup = () => {
    this.setState({ purchasing: false });
  };

  handleCheckout = () => {
    this.props.history.push("/checkout");
  };

  render() {
    const disbledInfo = { ...this.props.ingredients };
    for (let key in disbledInfo) {
      disbledInfo[key] = disbledInfo[key] <= 0;
    }
    return (
      <Auxilary>
        <Burger ingredients={this.props.ingredients} />
        <Modal show={this.state.purchasing} closePopup={this.handleClosePopup}>
          <OrderDetails
            ingredients={this.props.ingredients}
            price={this.props.total}
          />
          <Button clicked={this.handleClosePopup} btnType="Danger">
            Cancel
          </Button>
          <Button clicked={this.handleCheckout} btnType="Success">
            Continue
          </Button>
        </Modal>
        <BurgerControls
          total={this.props.total}
          disbledInfo={disbledInfo}
          purchasable={this.updatePurchasable(this.props.ingredients)}
          handlePurchase={this.handlePurchase}
          addIngredient={(type) => this.props.addIngredient(type)}
          removeIngredient={(type) => this.props.removeIngredient(type)}
        />
      </Auxilary>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    total: state.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredient: (type) => {
      dispatch({ type: actionType.ADD_INGREDIENTS, ingredientType: type });
    },
    removeIngredient: (type) => {
      dispatch({ type: actionType.REMOVE_INGREDIENTS, ingredientType: type });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withErrorHandler(BurgerBuilder, axios)));
