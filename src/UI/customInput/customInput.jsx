import React from "react";
import classes from "./customInput.module.css";
const CustomInput = (props) => {
  let classNames = [classes.Input];
  if (!props.isvalid) {
    classNames.push(classes.Error);
  }
  switch (props.elementtype) {
    case "input":
      return (
        <input
          className={classNames.join(" ")}
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
