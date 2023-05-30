import React from 'react'
import '../../pages/products/Products.module.scss'
import { MdAddShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { addToCart } from '../../store/features/shoppingCart/shoppingCartSlice'
import { useDispatch } from 'react-redux'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const addProductToCart = () => {
    dispatch(addToCart(product))
  }

  return (
    
    <div className="product_item">
      <Link to={`/productDetails/${product.id}`}>
        <div className="product_img">
          <img src={product.imageURL} alt={product.name} />
        </div>
        <h3 className="product_name">{product.name}</h3>
        
      </Link>
      <div className="product_card-bottom">
          <span className="product_price">{product.price} kr</span>
          {/* <button className="product_btn" onClick={addProductToCart}><MdAddShoppingCart className='fa-shopping-cart'/></button> */}
        </div>
    </div>
  )
}

export default ProductCard