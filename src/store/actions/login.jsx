import * as ActionTypes from "./actionsType";
import axios from "axios";
export const loginStart = () => {
  return {
    type: ActionTypes.LOGIN_START,
  };
};

export const loginSuccess = (token, expiresIn) => {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    idToken: token,
    expiresIn: expiresIn,
  };
};

export const loginFailed = (err) => {
  return {
    type: ActionTypes.LOGIN_FAILURE,
    err: err,
  };
};

export const login = (loginDetails) => {
  return (dispatch) => {
    dispatch(loginStart());
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCAR7cT7bNPuNBnIZm-aok1s4yya8otfdc",
        loginDetails
      )
      .then((res) => {
        console.log(res.data);
        dispatch(loginSuccess(res.data.idToken, res.data.expiresIn));
      })
      .catch((err) => {
        console.log(err);
        dispatch(loginFailed(err.response.data.error.message));
      });
  };
};
