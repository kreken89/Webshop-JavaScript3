import React from 'react'
import image1 from '../../assets/placeholders/369x310.svg'
import './Campaign.module.scss'
import { MdOutlineAddShoppingCart } from "react-icons/md"

const CampaignCard = () => {
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
    </div>
  )
}

export default CampaignCard