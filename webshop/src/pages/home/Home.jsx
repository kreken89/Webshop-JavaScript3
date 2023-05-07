import React from 'react'
import Hero from '../../components/hero/Hero'
import BestCollection from '../../components/bestCollection/BestCollection'

const Home = () => {
  return (
    <div className="home_container">
      <Hero />
      <BestCollection />
    </div>
  )
}

export default Home