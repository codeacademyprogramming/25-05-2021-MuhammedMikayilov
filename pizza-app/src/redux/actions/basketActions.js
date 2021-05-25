import * as actionTypes from "./actionTypes";

export const add_to_basket = (dispatch, item) =>
  dispatch({
    type: actionTypes.ADD_TO_BASKET,
    payload: item,
  });
