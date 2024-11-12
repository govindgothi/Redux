import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../assets/cart-icon.svg'
import "../App.css"
import { useSelector } from 'react-redux'
function Header() {
  const cartItem = useSelector(state=>state.cartItem)
  const itemCount = cartItem.reduce(
    (accumulator, currentItem) => accumulator + currentItem.quantity,
    0
  )
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="cart">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count">{itemCount}</div>
        </Link>
      </div>
    </header>
  )
}
export default Header;