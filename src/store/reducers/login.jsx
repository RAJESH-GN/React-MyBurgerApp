import * as ActionTypes from "./../actions/actionsType";
const initialState = {
  loading: false,
  idToken: null,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_START:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        idToken: action.idToken,
        loading: false,
      };

    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
