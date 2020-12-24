import classes from "./logo.module.css";
import React from "react";
import MyBurgerLogo from "./../../assets/images/burger-logo.png";

const logo = (props) => {
  return (
    <img
      src={MyBurgerLogo}
      alt="MyBurgerLogo"
      className={classes.MyBurgerLogo}
    />
  );
};

export default logo;
