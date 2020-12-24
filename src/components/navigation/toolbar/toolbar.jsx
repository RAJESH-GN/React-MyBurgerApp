import React from "react";
import Logo from "../../logo/logo";
import NavigationItems from "./../navigationItems/navigationItems";
import classes from "./toolbar.module.css";

const toolbar = (props) => {
  return (
    <div className={classes.Toolbar}>
      <div className="" onClick={props.handleMenuSidebar}>
        Menu
      </div>
      <Logo />
      <nav className={classes.DesktopOnly}>
        <NavigationItems></NavigationItems>
      </nav>
    </div>
  );
};

export default toolbar;
