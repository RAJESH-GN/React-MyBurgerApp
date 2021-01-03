import React, { Component } from "react";
import NavigationItem from "./navigationItem/navigationItem";
import classes from "./navigationItems.module.css";
import { connect } from "react-redux";

class NavigationItems extends Component {
  state = {};
  render() {
    return (
      <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>
          Burger Builder
        </NavigationItem>
        {this.props.idToken ? (
          <NavigationItem link="/myorders"> My Orders</NavigationItem>
        ) : null}
        <NavigationItem link="/auth">
          {this.props.idToken ? "Logout" : "Login"}
        </NavigationItem>
      </ul>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    idToken: state.login.idToken,
  };
};
export default connect(mapStateToProps)(NavigationItems);
