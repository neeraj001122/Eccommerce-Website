import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";


const Cart = (props) => {
  const closeCart = () => {
    props.onClose();
  };
  return (
    <Modal>
      <h1>Your Cart</h1>
      <ul className={classes.box}>
        <button className={classes.button} onClick={closeCart}>
          X
        </button>
        <div className={classes.cart_header}>
          <span>ITEM</span>
          <span >PRICE</span>
          <span>QUANTITY</span>
        </div>
      <CartItem></CartItem>
      </ul>
    </Modal>
  );
};

export default Cart;
