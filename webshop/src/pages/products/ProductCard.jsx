import React from 'react'
import productImg from '../../assets/placeholders/270x295.svg'
import tshirt from '../../assets/tshirts/t-shirt-red.jpeg'
import './Products.module.scss'
import { MdAddShoppingCart } from 'react-icons/md'

const ProductCard = () => {
  return (
    
    <div className="product_item">
      <div className="product_img">
        <img src={tshirt} alt="" />
      </div>
      <h3 className="product_name">First product</h3>
      <span className="product_category">Category</span>
      <div className="product_card-bottom">
        <span className="product_price">$ 10</span>
        <button className="product_btn"><MdAddShoppingCart className='fa-shopping-cart'/></button>
      </div>
    </div>
  )
}

export default ProductCard