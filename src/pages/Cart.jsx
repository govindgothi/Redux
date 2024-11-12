import React from 'react'
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';
 function Cart() {
const cartItem = useSelector((state)=>state.cartItem)
//console.log(cartItem)
  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {cartItem.map(({ id, title, rating, price, imageUrl, quantity }) => (
  
          <CartItem
            key={id}
            title={title}
            price={price}
            quantity={quantity}
            imageUrl={imageUrl}
            rating={rating}
          />
        ))}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">$500</div>
        </div>
      </div>
    </div>
  )
}
export default Cart;