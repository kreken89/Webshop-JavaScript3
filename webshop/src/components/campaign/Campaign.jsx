import React from 'react'
import './Campaign.module.scss'
import CampaignCard from './CampaignCard'
import CampaignCardSale from './CampaignCardSale'



const Campaign = () => {
  return (
    <div className='container_campaign'>
      <CampaignCard />
      <CampaignCardSale />
      <CampaignCard />
    </div>
  )
}

export default Campaign