import React, { Component } from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "./../../components/checkoutSummary/checkoutSummary";
import Aux from "./../../hoc/auxilary";
import ContactInfo from "./../../containers/contactInfo/contactInfo";

class Checkout extends Component {
  state = {
    ingredients: {},
    price: 0,
  };

  componentDidMount() {
    const queryParams = new URLSearchParams(
      this.props.location.search
    ).entries();
    const ingredients = {};
    for (let ing of queryParams) {
      ingredients[ing[0]] = +ing[1];
    }
    this.setState({ ingredients, price: this.props.location.price });
  }

  handleCancelClicked = () => {
    this.props.history.goBack();
  };

  handleCheckoutClicked = () => {
    this.props.history.push({
      pathname: this.props.match.url + "/contactinfo",
    });
  };

  render() {
    return (
      <Aux>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          handleCancelClicked={() => this.handleCancelClicked()}
          handleCheckoutClicked={() => this.handleCheckoutClicked()}
        />
        <Route
          path={this.props.match.url + "/contactinfo"}
          render={() => {
            console.log(this.props);
            return (
              <ContactInfo
                ingredients={this.state.ingredients}
                price={this.state.price}
                {...this.props}
              />
            );
          }}
        />
      </Aux>
    );
  }
}

export default Checkout;
