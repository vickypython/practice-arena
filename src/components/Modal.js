import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../feature/cart/modalSlice";
import "../App.css";
import { incrementByAmount } from "../feature/cart/counterSlice";
const Modal = () => {
  const dispatch = useDispatch();
return (
    <div className="modal">
      <h1>Do you really want to increment</h1>
      <div className="btn-div">
        <button
          className="btn"
          onClick={() => {
            dispatch(incrementByAmount(10));
          }}
        >
          confirm
        </button>
        <button className="btn" onClick={() => dispatch(closeModal())}>
          cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
