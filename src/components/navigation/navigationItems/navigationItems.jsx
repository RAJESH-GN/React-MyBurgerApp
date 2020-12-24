import React from "react";
import NavigationItem from "./navigationItem/navigationItem";
import classes from "./navigationItems.module.css";

const navigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/"> Checkout</NavigationItem>
    </ul>
  );
};

export default navigationItems;
