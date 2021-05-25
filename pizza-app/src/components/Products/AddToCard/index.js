import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_to_basket } from "../../../redux/actions/basketActions";

function AddToCard({ setShowHover, item }) {
  const basketSelected = (state) => {
    return {
      basket: state,
    };
  };

  const [radio, setRadio] = React.useState({});
  const [errorMess, setErrorMess] = React.useState(false);
  const dispatch = useDispatch();
  const itemSelected = useSelector(basketSelected);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRadio({ radioName: name, value: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addToBasket = () => {
    if (radio.radioName) {
      add_to_basket(dispatch, item);
      console.log("true: ", itemSelected);
      setShowHover(false);
    } else {
      setErrorMess(true);
    }
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
      <form onClick={handleSubmit}>
        {errorMess && (
          <div className="text-center text-danger">Please check size</div>
        )}
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="small"
            onChange={handleChange}
          />
          <label className="form-check-label">small - 20cm</label>
        </div>
        <div className="form-check my-3">
          <input
            className="form-check-input"
            type="radio"
            name="medium"
            onChange={handleChange}
          />
          <label className="form-check-label">medium - 25cm</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="large"
            onChange={handleChange}
          />
          <label className="form-check-label">big - 32cm</label>
        </div>
        <button
          type="submit"
          className="btn btn-success addToCards w-100"
          onClick={addToBasket}
          style={{
            backgroundColor: "#FE3326",
            marginTop: "30px",
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
      </form>
    </div>
  );
}

export default AddToCard;
