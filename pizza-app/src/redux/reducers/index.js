import { combineReducers } from "redux";

import basketReducer from "./basketReducer";
import pizzasReducer from "./pizzasReducer";
import userReducer from "./userReducers";

const reducer = combineReducers({
  basket: basketReducer,
  pizzas: pizzasReducer,
  users: userReducer,
});

export default reducer;
