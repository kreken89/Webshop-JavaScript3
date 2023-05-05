import React from 'react'
import image from '../../assets/placeholders/625x647.svg'
import './Hero.scss'


const Hero = () => {
  return (
    <div className="container_hero">
      <div className="row">
        <div className="CTA">
          <span>WELLCOME TO BMARKETO SHOP</span>
          <h1>Exclusive Chair gold Collection.</h1>
          <button className="btn btn-cta">SHOP NOW</button>
        </div>
        <div className="hero-image">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero