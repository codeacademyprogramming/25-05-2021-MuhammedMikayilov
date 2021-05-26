import React from "react";
import { useDispatch } from "react-redux";
import { remove_from_basket } from "../../redux/actions/basketActions";

function BasketItem({ item, total }) {
  const dispatch = useDispatch();

  const removeBasket = () => {
    remove_from_basket(dispatch, item);
  };

  return (
    <div className="row basket-row" style={{ position: "relative" }}>
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
            <span>{item.topping}</span>
          </div>
          <strong className="price">{item.result}$</strong>
        </div>

        <div
          onClick={removeBasket}
          style={{
            position: "absolute",
            top: "-2%",
            right: "20%",
            color: "red",
            cursor: "pointer",
          }}
        >
          <i className="fas fa-trash" />
        </div>
      </div>
    </div>
  );
}

export default BasketItem;
