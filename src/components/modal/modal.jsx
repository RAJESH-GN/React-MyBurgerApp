import React from "react";
import Aux from "./../../hoc/auxilary";
import Backdrop from "./../backdrop/backdrop";
import classes from "./modal.module.css";

const Modal = (props) => {
  return (
    <Aux>
      <Backdrop show={props.show} closeBackdrop={props.closePopup}></Backdrop>
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? 1 : 0,
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default Modal;
