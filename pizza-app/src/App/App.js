import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Pizzas from "../components/Products/Pizza";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "../components/Login";
import { useSelector } from "react-redux";
import AdminPanel from "../components/AdminPanel";
import Create from "../components/AdminPanel/CRUD/CreateOrUpdate";

const ProtectedAuthUser = ({ children, ...rest }) => {
  const userSelector = ({ users }) => {
    return { users: users };
  };

  const userItem = useSelector(userSelector);
  const { users } = userItem.users;
  // const [{ user }] = useUserContext();

  let user = localStorage.getItem("my-pizza-app");
  return user ? <Route {...rest}>{children}</Route> : <Redirect to="/login" />;
};

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Header />
          <Intro />
          <Pizzas path="/" />
          <Footer />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <ProtectedAuthUser path="/dashboard" exact>
          <AdminPanel />
        </ProtectedAuthUser>
        <ProtectedAuthUser path="/create_new_pizza" exact>
          <Create />
        </ProtectedAuthUser>
        <ProtectedAuthUser path="/update_pizza" exact>
          <Create />
        </ProtectedAuthUser>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
