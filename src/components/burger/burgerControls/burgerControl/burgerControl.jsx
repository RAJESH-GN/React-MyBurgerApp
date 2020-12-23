import React from "react";
import classes from "./burgerControl.module.css";

const burgerControl = (props) => {
  return (
    <div key={props.control.label} className={classes.BuildControl}>
      <label className={classes.Label}>{props.control.label}</label>
      <button
        className={classes.Less}
        onClick={props.removed}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className={classes.More} onClick={props.added}>
        More
      </button>
    </div>
  );
};

export default burgerControl;
