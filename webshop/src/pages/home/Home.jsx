import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../store/features/products/productListSlice'
import Hero from '../../components/hero/Hero'
import BestCollection from '../../components/bestCollection/BestCollection'
import Subscription from '../../components/subscribe/Subscription'
import Campaign from '../../components/campaign/Campaign'
import Carousel from '../../components/slider/Carousel'

const Home = () => {
  const dispatch = useDispatch()
  const { products, loading, error } = useSelector((state) => state.productList)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div className="home_container">
      <Hero products={products} />
      <div className="best_collection">
        <BestCollection products={products} />
      </div>
      <Campaign />
      <Carousel products={products} />
    </div>
  )
}

export default Home
