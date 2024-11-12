 import React from 'react'
 import { useDispatch } from 'react-redux'
import { addToCart,removeToCart,increaseCartItemQuantity,decreaseCartItemQuantity } from '../store/Slices/cartSlices'
 
 const Product = ({ id ,title, rating, price, imageUrl }) => {
  const dispatch = useDispatch()
   return (
    <div key={id} className="product" >
    <div className="product-image">
      <img src={imageUrl} alt={title} />
    </div>
    <div className="title-container">
      <h3>
        <a href="#">{title}</a>
      </h3>
    </div>
    <div className="price-rating-container">
      <p className="rating">{+rating} ★ ★ ★ ★</p>
      <p className="price">${price}</p>
    </div>
    <div className="cta-container">
      <button onClick={()=>{dispatch(addToCart({ id ,title, rating, price, imageUrl}))}}>Add to Cart</button>
      <button>Buy Now</button>
    </div>
  </div>
   )
 }
 
 export { Product}
 
 
