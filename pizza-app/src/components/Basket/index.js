import React from "react";
import { useSelector } from "react-redux";
import BasketItem from "./BasketItem";

function Basket() {
  const basketSelected = (state) => {
    return { basket: state.basketReducer.basket };
  };
  const itemSelected = useSelector(basketSelected);
  return (
    <section id="basket">
      <div className="container">
        <h2 onClick={() => console.log("itemSelected: ", itemSelected)}>
          Your Cart
        </h2>

        {itemSelected?.basket?.map((item) => (
          <BasketItem item={item} />
        ))}
      </div>
    </section>
  );
}

export default Basket;
