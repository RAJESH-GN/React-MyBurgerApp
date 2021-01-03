import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import ContactInformationDetails from "./../../components/contactInformationDetails/contactInformationDetails";
import axios from "./../../axios-order";
import withErrorHandler from "./../../hoc/withErrorHandler/withErrorHandler";
import * as ActionTypes from "./../../store/actions/index";

class ContactInfo extends Component {
  handleOrder = (contactInfo) => {
    const orderInfo = {
      order: this.props.ingredients,
      contactInfo,
      price: this.props.total,
    };
    this.props.createOrder(orderInfo, this.props.idToken);
    /* axios
      .post("/order", {
        order: this.props.ingredients,
        contactInfo,
        price: this.props.price,
      })
      .then((res) => {
        console.log("iam inside the response block");
        this.props.history.replace("/");
      })
      .catch((error) => console.log("Error" + error)); */
  };

  render() {
    const orderSuccessRedirect = this.props.order ? <Redirect to="/" /> : null;
    return (
      <div>
        {orderSuccessRedirect}
        <ContactInformationDetails
          handleOrderWithContactDetails={(contactInfo) => {
            this.handleOrder(contactInfo);
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.orders.loading,
    order: state.orders.purchased,
    ingredients: state.burgerBuilderReducer.ingredients,
    total: state.burgerBuilderReducer.total,
    idToken: state.login.idToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createOrder: (orderDetails, idToken) =>
      dispatch(ActionTypes.createOrder(orderDetails, idToken)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(withRouter(ContactInfo), axios));
