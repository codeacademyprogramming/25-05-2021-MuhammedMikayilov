import * as actionTypes from "./actionTypes";

export const loginForCRUD = (dispatch, user) => {
  dispatch({
    type: actionTypes.LOGIN,
    payload: user,
  });
};
