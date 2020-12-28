import React from "react";
import classes from "./input.module.css";

const Input = (props) => {
  let requestedElement = null;
  switch (props.elementtype) {
    case "input":
      requestedElement = (
        <input
          className={classes.Input}
          value={props.value}
          {...props}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      requestedElement = (
        <input className={classes.Input} {...props} onChange={props.changed} />
      );
      break;
    case "select":
      console.log("insisde select");
      requestedElement = (
        <select
          className={classes.Input}
          {...props}
          value={props.value}
          onChange={props.changed}
        >
          {props.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );

      break;

    default:
      requestedElement = <input className={classes.Input} {...props} />;
      break;
  }
  return (
    <div className={classes.InputElement}>
      <label>{props.label}</label>
      {requestedElement}
    </div>
  );
};

export default Input;
