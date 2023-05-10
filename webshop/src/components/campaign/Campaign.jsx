import React from 'react'
import './Campaign.module.scss'
import CampaignCard from './CampaignCard'



const Campaign = () => {
  return (
    <div className='container_campaign'>
      <CampaignCard />
      <CampaignCard />
      <CampaignCard />
    </div>
  )
}

export default Campaign