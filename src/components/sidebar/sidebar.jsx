import React from "react";
import Logo from "./../logo/logo";
import NavigationItems from "./../navigation/navigationItems/navigationItems";
import Backdrop from "./../backdrop/backdrop";
import Aux from "./../../hoc/auxilary";
import classes from "./sidebar.module.css";

const sidebar = (props) => {
  let sideDrawerClosed = [classes.Sidebar, classes.Closed];
  if (props.open) {
    sideDrawerClosed = [classes.Sidebar, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} closeBackdrop={props.closeBackdrop} />
      <div className={sideDrawerClosed.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav className={classes.NavigationItems}>
          <NavigationItems></NavigationItems>
        </nav>
      </div>
    </Aux>
  );
};

export default sidebar;
