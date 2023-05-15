import React from 'react'
import image1 from '../../assets/placeholders/625x647.svg'
import image2 from '../../assets/placeholders/625x647.svg'
import image3 from '../../assets/placeholders/625x647.svg'
import './Hero.scss'

// import icons left and right
import { AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'


const images = [image1, image2, image3]

class Hero extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentImageIndex: 0,
    }

    this.previousImage = this.previousImage.bind(this)
    this.nextImage = this.nextImage.bind(this)
  }

  previousImage() {
    const { currentImageIndex } = this.state
    const previousImageIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    this.setState({ currentImageIndex: previousImageIndex })
  }

  nextImage() {
    const { currentImageIndex } = this.state
    const nextImageIndex =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    this.setState({ currentImageIndex: nextImageIndex })
  }

  render() {
    const { currentImageIndex } = this.state

    return (
      <div className="container_hero">
        <div className="row">
          <button className="slider-control left" onClick={this.previousImage}>
            <AiOutlineLeft className="left_arrow" />
          </button>
          <div className="CTA">
            <span>WELCOME TO BMARKETO SHOP</span>
            <h1>Exclusive Chair gold Collection.</h1>
            <button className="btn btn-cta">SHOP NOW</button>
          </div>
          <div className="hero-image">
            <img src={images[currentImageIndex]} alt="" />
          </div>
          <button className="slider-control right" onClick={this.nextImage}>
            <AiOutlineRight className="right_arrow" />
          </button>
        </div>
      </div>
    )
  }
}

export default Hero
