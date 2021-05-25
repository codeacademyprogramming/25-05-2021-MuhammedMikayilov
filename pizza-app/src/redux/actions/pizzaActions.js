import * as actionTypes from "./actionTypes";
import { pizzaService } from "../../Service";

export const getPizzasList = () => (dispatch) => {
  pizzaService.getPizzas().then(({ data }) => {
    dispatch({
      type: actionTypes.GET_PIZZAS,
      payload: data,
    });
  });
};
