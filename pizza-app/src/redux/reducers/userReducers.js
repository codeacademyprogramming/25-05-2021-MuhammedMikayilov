import * as actionTypes from "../actions/actionTypes";

const userReducer = (state = { users: {} }, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return { users: action.payload };
    case actionTypes.LOGOUT:
      return { users: null };
    default:
      return state;
  }
};

export default userReducer;
