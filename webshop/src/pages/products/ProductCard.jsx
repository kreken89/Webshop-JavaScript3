import React from 'react'
import './Products.module.scss'
import { MdAddShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {


  

  return (
    
    <div className="product_item">
      <Link to={`/productDetails/${product.id}`}>
        <div className="product_img">
          <img src={product.imageURL} alt={product.name} />
        </div>
        <h3 className="product_name">{product.name}</h3>
        <span className="product_category">Category</span>
        
      </Link>
      <div className="product_card-bottom">
          <span className="product_price">{product.price} kr</span>
          <button className="product_btn"><MdAddShoppingCart className='fa-shopping-cart'/></button>
        </div>
    </div>
  )
}

export default ProductCard