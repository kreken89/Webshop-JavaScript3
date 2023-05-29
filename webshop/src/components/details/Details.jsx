import React, { useState, useEffect } from 'react'
import styles from '../../components/details/Details.module.css'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import Carousel from '../../components/slider/Carousel'
import SmallIcons from '../../components/smallIcons/SmallIcons'
import Loader from '../../components/loader/Loader'
import useDoc from '../../hooks/useDoc'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../store/features/products/productListSlice'
import { addToCart } from '../../store/features/shoppingCart/shoppingCartSlice'


const QuantityButton = () => {
  const [quantity, setQuantity] = useState(1)

  const increment = () => {
    setQuantity(quantity + 1)
  }

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className={styles['quantity-group']}>
      <button className={styles['quantity-decrement']} onClick={decrement}>
        -
      </button>
      <span className={styles['quantity']}>{quantity}</span>
      <button className={styles['quantity-increment']} onClick={increment}>
        +
      </button>
    </div>
  )
}

const SizeDropdown = () => {
  const [selectedSize, setSelectedSize] = useState('')

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value)
  }

  return (
    <>
      <label htmlFor="size" className={styles['selector']}>
        Select Size:
      </label>
      <select value={selectedSize} id="size" onChange={handleSizeChange}>
        <option value="">Select</option>
        <option value="36">EUR 36</option>
        <option value="37">EUR 37</option>
        <option value="38">EUR 38</option>
        <option value="39">EUR 39</option>
        <option value="40">EUR 40</option>
        <option value="41">EUR 41</option>
        <option value="42">EUR 42</option>
        <option value="43">EUR 43</option>
        <option value="44">EUR 44</option>
        <option value="45">EUR 45</option>
        <option value="46">EUR 46</option>
        
      </select>
      <p className={'size-selector'}>{selectedSize}</p>
    </>
  )
}


const Details = () => {
  const { id } = useParams()
  const { data, error, loading } = useDoc('products', id)
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { products } = productList

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  if (!data) {
    return (
      <div>
        {loading && <Loader />}
        {error && <p>{error}</p>}
      </div>
    )
  }
  
  return (
    <>
      <div className='container-details'>
          <div className='imgBox'>
          <img src={data.imageURL} alt="" />
        </div>
        <div className='textContainer'>
          <div className='detailsTextInfo'>
            <h2>{data.name}</h2>
          </div>
          <div className='text-box'>
            <p className='detailsTextInfo'>{data.description}</p>
          </div>
          <p className='price'>{data.price}</p>
          <div className='dropDown-box'>
            <SizeDropdown />
          </div>
          <div className='cart-bnt-box'>
            <div className='quantityButton'>
              <QuantityButton />
              <button className='addToCart-bnt' onClick={ () => dispatch(addToCart(data))}>
                Add to Cart{' '}
                <MdOutlineAddShoppingCart
                  className='fa-shopping-cart'
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="description_container">
        <div className="description_box">
          <div className="description_title">Description</div>
          <a href="#related_products" className="related_product_btn">
            Related Products
          </a>
        </div>
        <div className="description_info">
          <div className="product_details-info">
            <div className="description_info_title">
              <h2>{data.name}</h2>
              <h4>Product Details</h4>
            </div>
            <div className="description_info_text">{data.description}</div>
          </div>
          <div className="description_img">
            <img src={data.imageURL} alt={data.name} />
          </div>
        </div>

        <section id="related_products" className="related_products">
          <div className="related_products-title">
            <h4>Related Products</h4>
            <Carousel products={[data, ...products]} />
          </div>
        </section>

        <div className="icon_boxes">
          <SmallIcons />
        </div>
      </div>
    </>
  )
}

export default Details