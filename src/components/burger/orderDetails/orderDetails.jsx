import React from "react";
import Aux from "./../../../hoc/auxilary";

const orderDetails = (props) => {
  const ingredientDetails = Object.keys(props.ingredients).map((igkey) => {
    return (
      <li key={igkey}>
        <span
          style={{
            textTransform: "çapitalize",
            width: "80px",
            display: "inline-block",
          }}
        >
          {igkey}
        </span>
        : {props.ingredients[igkey]}
      </li>
    );
  });
  return (
    <Aux>
      <h2>Order Details</h2>
      <p>Delicious Burger with following ingredients: </p>
      <ul>{ingredientDetails}</ul>
      <p>Continue to checkout ?</p>
    </Aux>
  );
};

export default orderDetails;
