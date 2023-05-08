import React from 'react'
import Hero from '../../components/hero/Hero'
import BestCollection from '../../components/bestCollection/BestCollection'
// import BestCollectionCard from '../../components/bestCollection/BestCollectionCard'

const Home = () => {
  return (
    <div className="home_container">
      <Hero />
      <div className="best_colection">
      <BestCollection />
      </div>
    </div>
  )
}

export default Home