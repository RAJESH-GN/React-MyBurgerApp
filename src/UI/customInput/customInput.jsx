import React from "react";
import classes from "./customInput.module.css";
const CustomInput = (props) => {
  switch (props.elementtype) {
    case "input":
      return (
        <input
          className={classes.Input}
          {...props}
          value={props.value}
          onChange={(event) => props.onChange(event, props.name)}
        />
      );
    case "select":
      return <select name=""></select>;
    default:
      break;
  }
  return <input type="text" />;
};

export default CustomInput;
