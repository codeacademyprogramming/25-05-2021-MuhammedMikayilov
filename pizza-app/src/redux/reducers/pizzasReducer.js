import * as actionTypes from "../actions/actionTypes";

const pizzasReducer = (state = { pizzas: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PIZZAS:
      return { pizzas: action.payload };
    case actionTypes.CREATE_PIZZA:
      return { ...state, pizzas: [action.payload] };
    case actionTypes.UPDATE_PIZZA:
      return {
        ...state,
        pizzas: [action.payload],
      };
    case actionTypes.REMOVE_PIZZA:
      return state;
    default:
      return state;
  }
};

export default pizzasReducer;
