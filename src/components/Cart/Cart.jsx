import React, { useContext } from "react";
import "./Cart.css";
// import * as Products from "../Products/Products";

const Cart = () => {
  return <div>abc</div>;
};

// const Cart = () => {
//   const { cartItems, food_list, removeFromCart } = useContext(Products);
//   return (
//     <div className="cart">
//       <div className="cart-items">
//         <div className="cart-items-title">
//           <p>Items</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantily</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         <br />
//         <hr />
//         {food_list.map((item, index) => {
//           if (cartItems[item.id] > 0) {
//             return <div className="cart-items-title cart-items-item"></div>;
//           }
//         })}
//       </div>
//     </div>
//   );
// };

export default Cart;
