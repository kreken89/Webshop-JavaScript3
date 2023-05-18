import BestCollectionCard from '../bestCollection/BestCollectionCard'
import { useState } from 'react'

// import icons left and right
import { AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'

const Carousel = ({ products }) => {
  if (!products) {
    return null // or render a placeholder component or message
  }

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide(currentSlide === products.length - 1 ? 0 : currentSlide + 1)
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? products.length - 1 : currentSlide - 1)
  }

  return (
    <div className="top_selling-container">
      <h3 className="top_selling-title">Top selling products this week</h3>
      <div
        className="top_selling-products-container"
        style={{ overflow: 'hidden' }}>
        <div
          className="top_selling-products"
          style={{
            transform: `translateX(-${currentSlide * 20}%)`,
            transition: 'transform ease-out 0.5s',
          }}>
          {products.map((product, index) => (
            <BestCollectionCard key={index} product={product} />
          ))}
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