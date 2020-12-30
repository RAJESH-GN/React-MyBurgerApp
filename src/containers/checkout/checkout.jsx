import React, { Component } from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "./../../components/checkoutSummary/checkoutSummary";
import Aux from "./../../hoc/auxilary";
import ContactInfo from "./../../containers/contactInfo/contactInfo";
import { connect } from "react-redux";

class Checkout extends Component {
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
          ingredients={this.props.ingredients}
          handleCancelClicked={() => this.handleCancelClicked()}
          handleCheckoutClicked={() => this.handleCheckoutClicked()}
        />
        <Route
          path={this.props.match.url + "/contactinfo"}
          render={() => {
            console.log(this.props);
            return (
              <ContactInfo
                ingredients={this.props.ingredients}
                price={this.props.total}
                {...this.props}
              />
            );
          }}
        />
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    total: state.total,
  };
};

export default connect(mapStateToProps)(Checkout);
