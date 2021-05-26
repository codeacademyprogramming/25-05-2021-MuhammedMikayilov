import { HttpClient } from "../../HttpClient";

class PizzaService extends HttpClient {
  constructor() {
    super("http://localhost:3000");
  }

  getPizzas() {
    return this.get("pizzas");
  }

  postPizzas(body) {
    return this.post("pizzas", body);
  }

  putPizzas(id, body) {
    return this.put("pizzas", id, body);
  }

  deletePizzas(id) {
    return this.delete("pizzas", id);
  }
}

export const pizzaService = new PizzaService();
