import { HttpClient } from "../HttpClient";

class PizzaService extends HttpClient {
  constructor() {
    super("https://isko88.github.io");
  }

  getPizzas() {
    return this.get("apipizza.json");
  }
}

export const pizzaService = new PizzaService();
