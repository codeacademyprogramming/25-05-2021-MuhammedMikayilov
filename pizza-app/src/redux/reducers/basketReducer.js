import * as actionTypes from "../actions/actionTypes";

const basketReducer = (state = { basket: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
      const isExist = state.basket.find(
        (item) => item.id === action.payload.id
      );
      return {
        ...state,
        basket: isExist
          ? state.basket.map((item) =>
              item.id === action.payload.id
                ? {
                    ...item,
                    counter: item.counter + 1,
                  }
                : item
            )
          : [...state.basket, { ...action.payload, counter: 1 }],
      };
    case actionTypes.REMOVE_FROM_BASKET:
      return {
        state,
        basket: state.basket.filter((item) => item !== action.payload),
      };
    default:
      return { ...state };
  }
};

export default basketReducer;
