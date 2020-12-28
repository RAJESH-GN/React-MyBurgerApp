import classes from "./checkoutsummary.module.css";
import React from "react";
import { withRouter } from "react-router-dom";
import Burger from "./../burger/burger";
import Button from "./../../UI/button/button";

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h2>We wish your Burger Tastes the best</h2>
      <div className={classes.Burger}>
        <Burger ingredients={props.ingredients} />
      </div>
      <p>
        All Good!!! Please click on <strong>Continue</strong> to checkout
      </p>
      <Button btnType="Danger" clicked={props.handleCancelClicked}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.handleCheckoutClicked}>
        Continue
      </Button>
    </div>
  );
};

export default withRouter(checkoutSummary);
