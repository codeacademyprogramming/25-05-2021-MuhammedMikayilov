import React from "react";

function BasketItem({ item }) {
  return (
    <div className="row basket-row">
      <div className="col-md-3">
        <img src={item.image} alt="" width="70" />
      </div>
      <div className="col-md-1">
        <span className="count">x{item.counter}</span>
      </div>
      <div className="col-md-8">
        <div className="content-basket d-flex justify-content-between">
          <div className="info">
            <h5>{item.name}</h5>
            <span>{item.topping.map((topping) => topping + ", ")}</span>
          </div>
          <strong className="price">{item.price}$</strong>
        </div>
      </div>
    </div>
  );
}

export default BasketItem;
