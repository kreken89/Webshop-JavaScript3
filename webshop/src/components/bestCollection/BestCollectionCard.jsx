import React from 'react'
import productImg from '../../assets/placeholders/270x295.svg'
// import { motion } from 'framer-motion'
import './BestCollection.module.scss'
import { MdAddShoppingCart } from 'react-icons/md'

const BestCollectionCard = () => {
  return (
    <div className="product_item">
      <div className="product_img">
        <img src={productImg} alt="" />
      </div>
      <h3 className="product_name">First product</h3>
      <div className="product_card-bottom">
        <span className="product_price">$ 100</span>
        <button className="product_btn"><MdAddShoppingCart /></button>
      </div>
    </div>
  )
}

export default BestCollectionCard