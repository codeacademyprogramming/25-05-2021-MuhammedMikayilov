import React from "react";
import { useSelector } from "react-redux";
import BasketItem from "./BasketItem";

function Basket() {
  const basketSelected = (state) => {
    return { basket: state.basket.basket };
  };
  const itemSelected = useSelector(basketSelected);

  return (
    <section id="basket">
      <div className="container">
        <h2>Your Cart</h2>

        {itemSelected?.basket?.map((item) => (
          <BasketItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Basket;
