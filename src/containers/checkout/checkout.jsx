import React, { Component } from "react";
import CheckoutSummary from "./../../components/checkoutSummary/checkoutSummary";

class Checkout extends Component {
  state = {
    ingredients: {},
  };

  componentDidMount() {
    const queryParams = new URLSearchParams(
      this.props.location.search
    ).entries();
    const ingredients = {};
    for (let ing of queryParams) {
      ingredients[ing[0]] = +ing[1];
    }
    this.setState({ ingredients });
  }

  handleCancelClicked = () => {
    this.props.history.goBack();
  };

  handleCheckoutClicked = () => {
    this.props.history.push("/contactinfo");
  };

  render() {
    return (
      <CheckoutSummary
        ingredients={this.state.ingredients}
        handleCancelClicked={() => this.handleCancelClicked()}
        handleCheckoutClicked={() => this.handleCheckoutClicked()}
      />
    );
  }
}

export default Checkout;
