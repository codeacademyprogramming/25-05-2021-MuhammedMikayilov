import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Col, Container, Row, Table } from "reactstrap";
import { deletePizzas, getPizzasList } from "../../redux/actions/pizzaActions";
function AdminPanel() {
  const pizzasSelector = (state) => {
    return {
      pizzas: state.pizzas,
    };
  };

  const { push } = useHistory();

  const dispatch = useDispatch();
  const pizzasList = useSelector(pizzasSelector);

  const { pizzas } = pizzasList.pizzas;

  const updateItem = React.useCallback((item) => {
    push({
      pathname: "update_pizza",
      state: item,
    });
  }, []);

  React.useEffect(() => {
    dispatch(getPizzasList());
  }, [dispatch]);
  return (
    <Container>
      <Row className="mt-5">
        <Col sm="10" className="offset-md-1">
          <Link to="/" className="btn btn-info me-2">
            Back To Main
          </Link>
          <Link to="/create_new_pizza" className="btn btn-success">
            Create
          </Link>
          <Table dark>
            <thead>
              <tr>
                <th>#</th>
                <th onClick={() => console.log(pizzas)}>Image</th>
                <th>Pizza Name</th>
                <th>Price</th>
                <th>Toppings</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              {pizzas.map((item, idx) => (
                <tr key={item.id}>
                  <th scope="row">{idx + 1}</th>
                  <td>
                    <img src={item.img} alt="pizza-img" width="50" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.topping}</td>
                  <td>
                    <button
                      className="btn btn-warning me-1"
                      onClick={() => updateItem(item)}
                    >
                      update
                    </button>
                    <button
                      className="btn btn-danger me-1"
                      onClick={() => {
                        dispatch(deletePizzas(item.id));
                      }}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminPanel;
