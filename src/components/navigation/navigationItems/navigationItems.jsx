import React from "react";
import NavigationItem from "./navigationItem/navigationItem";
import classes from "./navigationItems.module.css";

const navigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/myorders"> My Orders</NavigationItem>
      <NavigationItem link="/login"> Login</NavigationItem>
    </ul>
  );
};

export default navigationItems;
