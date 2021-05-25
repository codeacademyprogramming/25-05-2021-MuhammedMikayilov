import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

const pizzasReducer = (state = initialState.pizzas, action) => {
  switch (action.type) {
    case actionTypes.GET_PIZZAS:
      return { pizzas: action.payload };
    default:
      return state;
  }
};

export default pizzasReducer;
