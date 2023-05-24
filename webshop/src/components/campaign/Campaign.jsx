import React from 'react'
import './Campaign.module.scss'
import CampaignCard from './CampaignCard'
import CampaignCard2 from './CampaignCard2'
import CampaignCardSale from './CampaignCardSale'



const Campaign = () => {
  return (
    <div className='container_campaign'>
      <CampaignCard />
      <CampaignCardSale />
      <CampaignCard2 />
    </div>
  )
}

export default Campaign