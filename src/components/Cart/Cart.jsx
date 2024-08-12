import React from "react";
import "./Cart.css";
import { ProductsData } from "../Products/Products.jsx";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(ProductsData);
  return;
  <div className="cart">
    <div className="cart-items">
      <div className="cart-items-title">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantily</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br />
      <hr />
    </div>
  </div>;
};

export default Cart;
