import React from "react";
import classes from "./navigationItem.module.css";
import { NavLink } from "react-router-dom";

const navigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink
        to={props.link}
        exact={props.exact}
        activeClassName={props.active ? classes.active : null}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
