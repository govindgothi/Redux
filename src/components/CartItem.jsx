import React from "react";
import { useDispatch } from "react-redux";
import {
  removeToCart,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} from "../store/Slices/cartSlices";
function CartItem({ id, title, rating, price, imageUrl, quantity }) {
  const dispatch = useDispatch();
  return (
    <div key={id} className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button
          onClick={() => {
            dispatch(decreaseCartItemQuantity({id}));
          }}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => {
            dispatch(increaseCartItemQuantity({id}));
          }}
        >
          +
        </button>
      </div>
      <div className="item-total">${quantity * price}</div>
    </div>
  );
}
export default CartItem;
