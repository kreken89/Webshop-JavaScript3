import React from 'react'
import Hero from '../../components/hero/Hero'
import BestCollection from '../../components/bestCollection/BestCollection'
<<<<<<< HEAD
// import BestCollectionCard from '../../components/bestCollection/BestCollectionCard'
=======
import Campaign from '../../components/campaign/Campaign'
import TopSellingProducts from '../../components/topSellingProducts/TopSellingProducts'

>>>>>>> 00f61cfbbd5daf16938ef725427222b7c5358203

const Home = () => {
  return (
    <div className="home_container">
      <Hero />
      <div className="best_colection">
      <BestCollection />
      </div>
      <Campaign />
      <TopSellingProducts />
    </div>
  )
}

export default Home