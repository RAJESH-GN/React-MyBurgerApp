import * as actionsType from "./../actions/actions";
const INGREDIENTS_PRICE = {
  cheese: 0.5,
  meat: 1.3,
  salad: 0.5,
  bacon: 0.8,
};
const initialState = {
  ingredients: {
    cheese: 0,
    salad: 0,
    bacon: 0,
    meat: 0,
  },
  total: 4.98,
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

    default:
      break;
  }
  return state;
};

export default reducer;
