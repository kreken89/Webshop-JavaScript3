import BestCollectionCard from '../bestCollection/BestCollectionCard'
import { useState } from 'react'

// import icons left and right
import { AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 9 ? 0 : currentSlide + 1)
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 9 : currentSlide - 1)
  }

  return (
    <div className="top_selling-container">
      <h3 className="top_selling-title">Top selling products in this week</h3>
      <div
        className="top_selling-products-container"
        style={{ overflow: 'hidden' }}>
        <div
          className="top_selling-products"
          style={{
            transform: `translateX(-${currentSlide * 20}% ) translateX(0%)`,
            transition: 'transform ease-out 0.5s',
          }}>
          <BestCollectionCard />
          <BestCollectionCard />
          <BestCollectionCard />
          <BestCollectionCard />
          <BestCollectionCard />
          <BestCollectionCard />
          <BestCollectionCard />
          <BestCollectionCard />
          <BestCollectionCard />
          <BestCollectionCard />
          <BestCollectionCard />
          <BestCollectionCard />
          <BestCollectionCard />
        </div>
      </div>
      <div className="slider-control">
        <button className="left_arrow" onClick={prevSlide}>
          <AiOutlineLeft />
        </button>
        <button className="right_arrow" onClick={nextSlide}>
          <AiOutlineRight />
        </button>
      </div>
    </div>
  )
}
export default Carousel




