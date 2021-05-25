import { combineReducers } from "redux";

import basketReducer from "./basketReducer";
import pizzasReducer from "./pizzasReducer";

const reducer = combineReducers({
  basket: basketReducer,
  pizzas: pizzasReducer,
});

export default reducer;
