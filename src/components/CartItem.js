import React from "react";

const CartItem = ({ name, rollNumber, marks,image }) => {
  return <div className="modal">
    <h1>{name}</h1>
    <h4>{rollNumber}</h4>
    <p>{marks}</p>
    <section>{image}</section>
    </div>;
};

export default CartItem;
