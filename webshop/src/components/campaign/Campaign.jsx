import React from 'react'
import image1 from '../../assets/placeholders/369x310.svg'
import image2 from '../../assets/placeholders/369x310.svg'
import image3 from '../../assets/placeholders/369x310.svg'
import {MdOutlineAddShoppingCart} from "react-icons/md"
import './Campaign.module.scss'

const Campaign = () => {
  return (
    <div className='container_campaign'>

      <div className='campaign_image1'>
        <img src={image1} alt="image1"></img>
        <p className='campaign_text'>
          Table Lamp - scelerisque tempore 
        </p>
        <div className='campaign_price'>
          <p className='price_line_through'>$50.00</p>
          <p className='price_sale'>$30.00</p>
          <MdOutlineAddShoppingCart className='fa-shopping-cart' />
        </div>
      </div>

      <div className='campaign_image1'>
        <img src={image2} alt="image2"></img>
        <p className='campaign_text'>
          Table Lamp - scelerisque tempore 
        </p>
        <div className='campaign_price'>
          <p className='price_line_through'>$50.00</p>
          <p className='price_sale'>$30.00</p>
          <MdOutlineAddShoppingCart className='fa-shopping-cart' />
        </div>
      </div>

      <div className='campaign_image1'>
        <img src={image3} alt="image3"></img>
        <p className='campaign_text'>
          Table Lamp - scelerisque tempore 
        </p>
        <div className='campaign_price'>
          <p className='price_line_through'>$50.00</p>
          <p className='price_sale'>$30.00</p>
          <MdOutlineAddShoppingCart className='fa-shopping-cart' />
        </div>
      </div>
      
    </div>
  )
}

export default Campaign