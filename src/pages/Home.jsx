import React from 'react'
import { productsList } from '../components/ProductList'
import { Product } from '../components/Product'
const Home = () => {
  return (
    
      <div className="products-container">
      {productsList.map(({ id, title, rating, price, image }) => (
        <Product
          id={id}
          key={id}
          title={title}
          rating={rating.rate}
          price={price}
          imageUrl={image}
        />
      ))}
    </div>
   
  )
}

export default Home
