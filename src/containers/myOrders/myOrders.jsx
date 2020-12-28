import React, { Component } from "react";
import classes from "./myOrders.module.css";
import axios from "./../../axios-order";

class MyOrders extends Component {
  state = {
    orders: [],
  };

  componentDidMount() {
    axios
      .get("/order.json")
      .then((res) => {
        const orders = [];
        for (let orderid in res.data) {
          orders.push({ ...res.data[orderid], id: orderid });
        }
        this.setState({ orders: orders });
      })
      .catch((err) => console.log(err));
  }

  loadOrderWithIngredients = (orderInfo) => {
    const ingredients = Object.entries(orderInfo.order).map((m) => {
      return m[0] + "(" + m[1] + ")";
    });
    return ingredients.join(",");
  };

  render() {
    return this.state.orders.map((order) => {
      return (
        <div className={classes.Myorders} key={order.id}>
          <p>
            <strong>Ingredients:</strong>
            {this.loadOrderWithIngredients(order)}
          </p>
          <p>
            <strong>Price:</strong>USD{order.price}
          </p>
        </div>
      );
    });
  }
}

export default MyOrders;
