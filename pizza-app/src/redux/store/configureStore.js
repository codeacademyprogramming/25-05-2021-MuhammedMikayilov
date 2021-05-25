import { createStore, applyMiddleware } from "redux";
import reduxThunkMiddleware from "redux-thunk";
import reducer from "../reducers/index";

const logger = (storeApi) => (next) => (action) => {
  console.log("Store before action dispatch", storeApi.getState());
  console.log("Action dispatch: ", action);
  const result = next(action);
  console.log("Store before action dispatch", storeApi.getState());
  return result;
};

const middlewares = applyMiddleware(logger, reduxThunkMiddleware);

export default function configureStore() {
  return createStore(reducer, middlewares);
}
