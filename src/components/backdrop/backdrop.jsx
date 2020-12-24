import classes from "./backdrop.module.css";
import React from "react";

const backdrop = (props) => {
  return props.show ? (
    <div className={classes.Backdrop} onClick={props.closeBackdrop}></div>
  ) : null;
};

export default backdrop;
