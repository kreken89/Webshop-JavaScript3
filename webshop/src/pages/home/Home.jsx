import React from 'react'
import Hero from '../../components/hero/Hero'
import BestCollection from '../../components/bestCollection/BestCollection'
import Campaign from '../../components/campaign/Campaign'
// import TopSellingProducts from '../../components/topSellingProducts/TopSellingProducts'
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
