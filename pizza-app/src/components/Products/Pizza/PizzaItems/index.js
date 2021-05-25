import React from "react";
import { Card, Col } from "reactstrap";
import AddToCard from "../../AddToCard/index";

function PizzaItems({ item }) {
  const [showHover, setShowHover] = React.useState(false);
  return (
    <Col md="3" className="mt-5">
      <Card className="card" style={{ width: "18rem" }}>
        <img src={item.image} alt="sdsd" />
        <div className="card-body">
          <div className="card-title d-flex justify-content-between">
            <h5>{item.name}</h5>
            <span>32cm</span>
          </div>
          <p className="card-text">
            {item.topping
              ? item.topping.map((topping) => topping + ", ")
              : "Resept tapilmadi"}
          </p>
          <div className="card-span">{item.price}$</div>
          <div className="button">
            <button className=" btn-success" onClick={() => setShowHover(true)}>
              <i className="fas fa-shopping-bag"></i>
            </button>
          </div>
        </div>
        {showHover && <AddToCard setShowHover={setShowHover} item={item} />}
      </Card>
    </Col>
  );
}

export default PizzaItems;
