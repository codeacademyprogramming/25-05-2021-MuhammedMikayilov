import { pizzaService } from "../../Service/Pizza";
import * as actionTypes from "./actionTypes";
import swal from "sweetalert";

export const getPizzasList = () => (dispatch) => {
  pizzaService.getPizzas().then(({ data }) => {
    dispatch({
      type: actionTypes.GET_PIZZAS,
      payload: data,
    });
  });
};

export const postPizzas = (body, push) => (dispatch) => {
  pizzaService
    .postPizzas(body)
    .then(() => {
      dispatch({
        type: actionTypes.CREATE_PIZZA,
        payload: body,
      });
    })
    .then(() => swal("Successful", "Create new Pizza", "success"))
    .then(() => push("/dashboard"))
    .catch((err) => console.log(err));
};

export const putPizzas = (id, body, push) => (dispatch) => {
  pizzaService
    .putPizzas(id, body)
    .then(() => {
      dispatch({
        type: actionTypes.UPDATE_PIZZA,
        payload: body,
      });
    })
    .then(() => swal("Successful", "Update Pizza", "success"))
    .then(() => dispatch(getPizzasList()))
    .then(() => push("/dashboard"))
    .catch((err) => console.log(err));
};

export const deletePizzas = (id) => (dispatch) => {
  pizzaService
    .deletePizzas(id)
    .then(() => {
      dispatch({
        type: actionTypes.REMOVE_PIZZA,
        payload: id,
      });
    })
    .then(() => swal("Successful", "Deleted Pizza", "success"))
    .then(() => dispatch(getPizzasList()))
    .catch((err) => console.log(err));
};

// putPizzas
