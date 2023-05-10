import React from 'react'
import Hero from '../../components/hero/Hero'
import BestCollection from '../../components/bestCollection/BestCollection'

// import BestCollectionCard from '../../components/bestCollection/BestCollectionCard'
import Subscription from '../../components/subscribe/Subscription'

import Campaign from '../../components/campaign/Campaign'
import Carousel from '../../components/slider/Carousel'

const Home = () => {
  return (
    <div className="home_container">
      <Hero />
      <div className="best_collection">
        <BestCollection />
      </div>
      <Campaign />
      <Carousel />
    </div>
  )
}

export default Home
