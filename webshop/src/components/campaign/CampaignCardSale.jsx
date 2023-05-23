import React from 'react'
import image from '../../assets/placeholders/sale-50.png'

import './Campaign.module.scss'
import { Link } from 'react-router-dom'

const CampaignCard = () => {
  return (
    <div className='container_campaign'>
      <div className='campaign_sale'>
        <img src={image} alt="image1"></img> 
      </div>      
    </div>
  )
}

export default CampaignCard