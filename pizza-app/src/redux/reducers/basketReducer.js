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
              item.id === isExist.id
                ? {
                    ...action.payload,
                    counter: (action.payload.counter =
                      action.payload.counter + 1),
                  }
                : item
            )
          : [...state.basket, { ...action.payload, counter: 1 }],
      };
    default:
      return { ...state };
  }
};

export default basketReducer;
