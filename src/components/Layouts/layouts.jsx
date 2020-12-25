import React, { Component } from "react";
import Aux from "./../../hoc/auxilary";
import Toolbar from "../navigation/toolbar/toolbar";
import classes from "./layouts.module.css";
import Sidebar from "../sidebar/sidebar";

class Layouts extends Component {
  state = {
    showSideDrawer: false,
  };

  handleBackdropClosed = () => {
    this.setState({ showSideDrawer: false });
  };

  handleMenuSidebar = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Aux>
        <Sidebar
          open={this.state.showSideDrawer}
          closeBackdrop={this.handleBackdropClosed}
        />
        <Toolbar handleMenuSidebar={this.handleMenuSidebar} />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layouts;
