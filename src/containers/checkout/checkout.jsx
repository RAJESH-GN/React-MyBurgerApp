import React, { Component } from "react";
import { Redirect, Route, withRouter } from "react-router-dom";
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
    const checkoutpage = (
      <Aux>
        <CheckoutSummary
          ingredients={this.props.ingredients}
          handleCancelClicked={() => this.handleCancelClicked()}
          handleCheckoutClicked={() => this.handleCheckoutClicked()}
        />
        <Route
          path={this.props.match.url + "/contactinfo"}
          component={ContactInfo}
        />
      </Aux>
    );
    return this.props.ingredients ? checkoutpage : <Redirect to="/" />;
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilderReducer.ingredients,
    total: state.burgerBuilderReducer.total,
  };
};

export default connect(mapStateToProps)(withRouter(Checkout));
