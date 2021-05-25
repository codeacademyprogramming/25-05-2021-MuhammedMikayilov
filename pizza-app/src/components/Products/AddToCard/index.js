import React from "react";
import { useDispatch } from "react-redux";
import { add_to_basket } from "../../../redux/actions/basketActions";

function AddToCard({ setShowHover, item }) {
  const dispatch = useDispatch();
  const addToBasket = () => {
    add_to_basket(dispatch, item);
    setShowHover(false);
  };

  return (
    <div className="sizes">
      <strong
        style={{
          fontSize: "25px",
          display: "inline-block",
          marginBottom: "30px",
        }}
      >
        Sizes:{" "}
      </strong>

      <button
        type="submit"
        className="btn btn-success addToCards w-100"
        onClick={addToBasket}
        style={{
          backgroundColor: "#FE3326",
          marginTop: "58%",
          border: "none",
        }}
      >
        Add to basket
      </button>
      <button
        type="click"
        className="btn cancel w-100"
        onClick={() => {
          setShowHover(false);
        }}
        style={{
          backgroundColor: "#FE3326",
          marginTop: "30px",
          border: "none",
        }}
      >
        Cancel
      </button>
    </div>
  );
}

export default AddToCard;
