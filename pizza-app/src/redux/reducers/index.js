import { combineReducers } from "redux";

import basketReducer from "./basketReducer";
import pizzasReducer from "./pizzasReducer";

const reducer = combineReducers({
  basketReducer,
  pizzasReducer,
});

export default reducer;
