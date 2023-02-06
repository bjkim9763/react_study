import { useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const dataContainer = [];

  const cartitems = dataContainer.map((data) => (
    <ul>
      <li>{data.name}</li>
      <li>{data.amount}</li>
      <li>{data.price}</li>
    </ul>
  ));
  return (
    <Modal onClick={props.onClick}>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>33</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClick} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
