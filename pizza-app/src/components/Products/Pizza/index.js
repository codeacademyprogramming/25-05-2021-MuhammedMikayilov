import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { getPizzasList } from "../../../redux/actions/pizzaActions";
import Basket from "../../Basket";
import PizzaItems from "../Pizza/PizzaItems";

function Pizzas() {
  const pizzasSelector = (state) => {
    return {
      pizzas: state.pizzas,
    };
  };

  const [isOpenBasket, setBasket] = React.useState(false);

  const dispatch = useDispatch();
  const pizzasList = useSelector(pizzasSelector);

  const pizzaList = pizzasList.pizzas.pizzas;

  React.useEffect(() => {
    dispatch(getPizzasList());
  }, [dispatch]);
  return (
    <section id="pizzas" style={{ position: "relative" }}>
      <Container>
        <Row>
          <Col>
            <div className="title">
              <h1>Popular dishes</h1>
              <div
                onClick={() => {
                  setBasket(!isOpenBasket);
                }}
                className="basket-icon"
              >
                <i className="fas fa-shopping-bag" />
              </div>
              <div className="basket-hover">$48</div>
            </div>
          </Col>
        </Row>
        <Row>
          {pizzaList?.map((item) => (
            <PizzaItems key={item.id} item={item} />
          ))}
        </Row>

        {isOpenBasket && <Basket />}
      </Container>
    </section>
  );
}

export default Pizzas;
