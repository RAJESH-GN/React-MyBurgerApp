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
import * as ActionTypes from "./../../store/actions/index";
import { connect } from "react-redux";

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
  };

  componentWillMount() {
    if (this.props.idToken && this.props.ingredientsAddedSignUp) {
      this.setState({ purchasing: true });
    } else this.props.initIngredients(axios);
  }

  updatePurchasable = (updatedIngredients) => {
    const ingredientsSum = Object.keys(this.props.ingredients)
      .map((igkey) => updatedIngredients[igkey])
      .reduce((sum, el) => sum + el, 0);
    return ingredientsSum > 0;
  };

  handlePurchase = () => {
    if (this.props.idToken) {
      this.setState({ purchasing: true });
      this.props.purchaseInit();
    } else {
      this.props.setIngredients(this.props.ingredients, this.props.total);
      this.props.setIngredientsAddedSignUp(true);
      this.props.history.push("/auth");
    }
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
    const burger = (
      <Auxilary>
        <Burger ingredients={this.props.ingredients} />
        <Modal show={this.state.purchasing} closePopup={this.handleClosePopup}>
          <OrderDetails
            ingredients={this.props.ingredients}
            price={this.props.total.toFixed(2)}
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
          token={this.props.idToken}
          purchasable={
            this.props.ingredients
              ? this.updatePurchasable(this.props.ingredients)
              : false
          }
          handlePurchase={this.handlePurchase}
          addIngredient={(type) => this.props.addIngredient(type)}
          removeIngredient={(type) => this.props.removeIngredient(type)}
        />
      </Auxilary>
    );
    return this.props.ingredients ? burger : null;
  }
}
const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilderReducer.ingredients,
    total: state.burgerBuilderReducer.total,
    idToken: state.login.idToken,
    purchased: state.orders.purchased,
    ingredientsAddedSignUp: state.burgerBuilderReducer.ingredientsAddedSignUp,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredient: (type) => {
      dispatch(ActionTypes.addIngredients(type));
    },
    setIngredients: (ings, total) => {
      dispatch(ActionTypes.setIngredients(ings, total));
    },
    removeIngredient: (type) => {
      dispatch(ActionTypes.removeIngredients(type));
    },
    initIngredients: () => {
      dispatch(ActionTypes.initIngredients());
    },
    purchaseInit: () => {
      dispatch(ActionTypes.purchaseInit());
    },
    setIngredientsAddedSignUp: (ingredientsAddedSignUp) => {
      dispatch(ActionTypes.setIngredientsAddedSignUp(ingredientsAddedSignUp));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withErrorHandler(BurgerBuilder, axios)));
