import React from 'react'
import image from '../../assets/placeholders/sale-50.png'

import './Campaign.module.scss'
import { Link } from 'react-router-dom'

const CampaignCard = () => {
  return (
    <div className='container_campaign'>
        <Link to={`/products`}>
      <div className='campaign_sale'>
        <img src={image} alt="image1"></img> 
      </div>      
      </Link>
    </div>
  )
}

export default CampaignCard