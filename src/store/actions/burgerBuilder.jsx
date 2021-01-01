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

export const setIngredients = (ingredients) => {
  return {
    type: ActionTypes.SET_INGREDIENTS,
    ingredients,
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
      .get(
        "http://react-my-burger-9d668-default-rtdb.europe-west1.firebasedatabase.app/ingredients"
      )
      .then((res) => {
        dispatch(setIngredients(res.data));
      })
      .catch((err) => {
        dispatch(fetchIngredientsFailure(err));
      });
  };
};
