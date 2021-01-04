import React, { Component } from "react";
import classes from "./myOrders.module.css";
import axios from "./../../axios-order";
import * as ActionType from "./../../store/actions/index";
import { connect } from "react-redux";
class MyOrders extends Component {
  state = {
    orders: [],
  };

  componentDidMount() {
    this.props.fetchOrders(this.props.idToken);
  }

  loadOrderWithIngredients = (orderInfo) => {
    const ingredients = Object.entries(orderInfo.order).map((m) => {
      return m[0] + "(" + m[1] + ")";
    });
    return ingredients.join(",");
  };

  render() {
    return this.props.orders.map((order) => {
      return (
        <div className={classes.Myorders} key={order.id}>
          <p>
            <strong>Ingredients:</strong>
            {this.loadOrderWithIngredients(order)}
          </p>
          <p>
            <strong>Price: </strong>$ {order.price}
          </p>
        </div>
      );
    });
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders.order,
    idToken: state.login.idToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: (idToken) => dispatch(ActionType.fetchOrderDetails(idToken)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyOrders);
