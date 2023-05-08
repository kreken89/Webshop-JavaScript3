import React from 'react'
import Hero from '../../components/hero/Hero'
import BestCollection from '../../components/bestCollection/BestCollection'
import Campaign from '../../components/campaign/Campaign'
import TopSellingProducts from '../../components/topSellingProducts/TopSellingProducts'


const Home = () => {
  return (
    <div className="home_container">
      <Hero />
      <BestCollection />
      <Campaign />
      <TopSellingProducts />
    </div>
  )
}

export default Home