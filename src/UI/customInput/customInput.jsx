import React from "react";
import classes from "./customInput.module.css";
const CustomInput = (props) => {
  let classNames = [classes.Input];
  if (!props.isvalid && props.touched) {
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
          onBlur={props.focusOut}
        />
      );
    default:
      break;
  }
  return <input type="text" />;
};

export default CustomInput;
