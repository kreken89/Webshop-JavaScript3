import React from 'react'
import image from '../../assets/placeholders/469x356.svg'

const ProductDetails = () => {
  return (
    <div>
      <div className="description_container">
        <div className="description_box">
          <div className="description_title">Description</div>
          <div className="related_product_btn">
            <a href="#related_products">Related Products</a>
          </div>
        </div>
        <div className="description_info">
          <div className="product_details-info">
            <div className="description_info_title">
              <h4>Product Details</h4>
            </div>
            <div className="description_info_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, quos voluptates voluptatibus
              voluptatibus voluptatibus voluptatibus voluptatibus voluptatibus
              voluptatibus voluptatibus voluptatibus voluptatibus voluptatibus
              voluptatibus voluptatibus voluptatibus voluptatibus voluptatibus
              voluptatibus voluptatibus voluptatibus voluptatibus voluptatibus
              voluptatibus voluptatibus voluptatibus voluptatibus voluptatibus
              voluptatibus voluptatibus.
            </div>
          </div>
          <div className="description_img">
            <img src={image} alt="" />
          </div>
        </div>
        <section id="related_products" className="related_products">
          <div className="related_products-title">
            <h4>Related Products</h4>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductDetails
