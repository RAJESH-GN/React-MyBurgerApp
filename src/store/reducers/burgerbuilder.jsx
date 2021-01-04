import * as actionsType from "./../actions/actionsType";
const INGREDIENTS_PRICE = {
  cheese: 0.5,
  meat: 1.3,
  salad: 0.5,
  bacon: 0.8,
};
const initialState = {
  ingredients: null,
  total: 4.98,
  ingredientsAddedSignUp: false,
  error: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientType]: state.ingredients[action.ingredientType] + 1,
        },
        total: state.total + INGREDIENTS_PRICE[action.ingredientType],
        ingredientsAddedSignUp: false,
      };
    case actionsType.REMOVE_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientType]: state.ingredients[action.ingredientType] - 1,
        },
        total: state.total - INGREDIENTS_PRICE[action.ingredientType],
      };
    case actionsType.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
        total: action.total,
      };

    case actionsType.FETCH_INGREDIENTS_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actionsType.INGREDIENTS_ADD_SIGNUP:
      return {
        ...state,
        ingredientsAddedSignUp: action.ingredientsAddedSignUp,
      };

    default:
      break;
  }
  return state;
};

export default reducer;
