import React from "react";
import Aux from "./../../hoc/auxilary";
import classes from "./layouts.module.css";

const Layouts = (props) => {
  return (
    <Aux>
      <div>Toolbar,Sidebar</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layouts;
