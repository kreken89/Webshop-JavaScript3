import React from 'react'
import image2 from '../../assets/placeholders/dandg2.webp'
import './Campaign.module.scss'


const CampaignCard = () => {
  return (
    <div className='container_campaign'>
      <div className='campaign_image1'>
        <img src={image2} alt="image1"></img>
        <h6 className='campaign_text'>
          Dolce & Gabbana
        </h6>
        <p>BIG promotion for D&G this month!</p>
      </div>        
    </div>
  )
}

export default CampaignCard