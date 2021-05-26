import { HttpClient } from "../../HttpClient";

class UserService extends HttpClient {
  constructor() {
    super("https://isko88.github.io");
  }

  getUsers() {
    // return this.get("apiUser.json");
    console.log("user", [{ item: "name" }]);
  }
}

export const userService = new UserService();
