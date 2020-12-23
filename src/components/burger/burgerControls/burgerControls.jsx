import React from "react";
import BurgerControl from "../burgerControls/burgerControl/burgerControl";
import classes from "./burgerControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
];

const burgerControls = (props) => {
  return (
    <div className={classes.BurgerControls}>
      <p>
        Current Price : <strong>${props.total.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => (
        <BurgerControl
          key={ctrl.label}
          control={ctrl}
          disabled={props.disbledInfo[ctrl.type]}
          added={() => props.addIngredient(ctrl.type)}
          removed={() => props.removeIngredient(ctrl.type)}
        />
      ))}
      <button
        className={classes.OrderNow}
        disabled={!props.purchasable}
        onClick={props.handlePurchase}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default burgerControls;
