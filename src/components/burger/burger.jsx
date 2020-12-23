import React from "react";
import BurgerIngredients from "./BurgerIngredients/burgerIngredients";
import classes from "./burger.module.css";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igkey) =>
      [...Array(props.ingredients[igkey])].map((ingredients, index) => (
        <BurgerIngredients key={igkey + index} type={igkey} />
      ))
    )
    .flat();
  if (transformedIngredients.length == 0) {
    transformedIngredients = <p>Please add the ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
