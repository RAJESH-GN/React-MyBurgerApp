import * as ActionTypes from "./actionsType";
import axios from "./../../axios-order";

export const addIngredients = (type) => {
  return {
    type: ActionTypes.ADD_INGREDIENTS,
    ingredientType: type,
  };
};

export const removeIngredients = (type) => {
  return {
    type: ActionTypes.REMOVE_INGREDIENTS,
    ingredientType: type,
  };
};

export const setIngredients = (ingredients, total) => {
  return {
    type: ActionTypes.SET_INGREDIENTS,
    ingredients,
    total,
  };
};

export const fetchIngredientsFailure = (err) => {
  return {
    type: ActionTypes.FETCH_INGREDIENTS_ERROR,
    error: err,
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get("/ingredients.json")
      .then((res) => {
        dispatch(setIngredients(res.data, 4.98));
      })
      .catch((err) => {
        dispatch(fetchIngredientsFailure(err));
      });
  };
};
