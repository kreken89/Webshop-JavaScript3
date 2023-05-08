import React from 'react'
import image1 from '../../assets/placeholders/270x295.svg'
import image2 from '../../assets/placeholders/270x295.svg'
import image3 from '../../assets/placeholders/270x295.svg'
import image4 from '../../assets/placeholders/270x295.svg'
import image5 from '../../assets/placeholders/270x295.svg'
import image6 from '../../assets/placeholders/270x295.svg'

const TopSellingProducts = () => {
  return (
    <div className='container_topSellingProducts'>
      <div className='top_selling_product_image1'>
        <img src={image1} alt="image1"></img>
        <p className='campaign_text'>Gumshoes black fashion</p>
        <div className='top_selling_product_price'>
          <p className='price_line_through'>$120.00</p>
          <p className='price_sale'>$80.00</p>
        </div>
      </div>
      <div className='top_selling_product_image1'>
        <img src={image2} alt="image1"></img>
        <p className='campaign_text'>Gumshoes black fashion</p>
        <div className='top_selling_product_price'>
          <p className='price_line_through'>$120.00</p>
          <p className='price_sale'>$80.00</p>
        </div>
      </div>
      <div className='top_selling_product_image1'>
        <img src={image3} alt="image1"></img>
        <p className='campaign_text'>Gumshoes black fashion</p>
        <div className='top_selling_product_price'>
          <p className='price_line_through'>$120.00</p>
          <p className='price_sale'>$80.00</p>
        </div>
      </div>
      <div className='top_selling_product_image1'>
        <img src={image4} alt="image1"></img>
        <p className='campaign_text'>Gumshoes black fashion</p>
        <div className='top_selling_product_price'>
          <p className='price_line_through'>$120.00</p>
          <p className='price_sale'>$80.00</p>
        </div>
      </div>
      <div className='top_selling_product_image1'>
        <img src={image5} alt="image1"></img>
        <p className='campaign_text'>Gumshoes black fashion</p>
        <div className='top_selling_product_price'>
          <p className='price_line_through'>$120.00</p>
          <p className='price_sale'>$80.00</p>
        </div>
      </div>
      <div className='top_selling_product_image1'>
        <img src={image6} alt="image1"></img>
        <p className='campaign_text'>Gumshoes black fashion</p>
        <div className='top_selling_product_price'>
          <p className='price_line_through'>$120.00</p>
          <p className='price_sale'>$80.00</p>
        </div>
      </div>
    </div>
  )
}

export default TopSellingProducts