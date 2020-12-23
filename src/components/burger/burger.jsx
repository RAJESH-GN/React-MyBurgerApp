import React from "react";
import BurgerIngredients from "./BurgerIngredients/burgerIngredients";
import classes from "./burger.module.css";

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients).map((igkey) =>
    [...Array(props.ingredients[igkey])].map((ingredients, index) => (
      <BurgerIngredients key={igkey + index} type={igkey} />
    ))
  );
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
