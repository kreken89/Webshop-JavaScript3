import React, { useState, useEffect } from 'react'
import './Hero.scss'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const Hero = ({ products }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage()
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [products])

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
    prevIndex === products.length - 1 ? 0 : prevIndex + 1
    )
  }


  if (products.length === 0) {
    return null
  }

  const currentProduct = products[currentImageIndex]
  const imageURL = currentProduct ? currentProduct.imageURL : ''

  return (
    <div className="container_hero">
      <div className="row_hero">
        <button className="slider-control left" onClick={previousImage}>
          <AiOutlineLeft className="left_arrow" />
        </button>
        <div className="CTA">
          <span>WELCOME TO BMARKETO SHOP</span>
          <h1>Exclusive Sneakers gold Collection.</h1>
          <a href="#best_collection" className="btn btn-cta">
            SHOP NOW
          </a>
        </div>
        <div className="hero_image">
          <img src={imageURL} alt="" />
        </div>
        <button className="slider-control right" onClick={nextImage}>
          <AiOutlineRight className="right_arrow" />
        </button>
      </div>
    </div>
  )
}

export default Hero