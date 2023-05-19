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

const QuantityButton = () => {

  const [quantity, setQuantity] = useState(0)

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
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
      </select>
      <p className={styles['size-selector']}>{selectedSize}</p>
    </>
  )
}

const ProductDetails = () => {
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
      <div className={styles['container-details']}>
        <div className={styles['imgBox']}>
          <img src={data.imageURL} alt="" />
        </div>
        <div className={styles['textContainer']}>
          <div className={styles['detailsTextInfo']}>
            <h2>{data.name}</h2>
          </div>
          <div className={styles['text-box']}>
            <p className={styles['detailsTextInfo']}>{data.description}</p>
          </div>
          <p className={styles['price']}>{data.price}</p>
          <div className={styles['dropDown-box']}>
            <SizeDropdown />
          </div>
          <div className={styles['cart-bnt-box']}>
            <div className={styles['quantityButton']}>
              <QuantityButton />
              <button className={styles['addToCart-bnt']}>
                Add to Cart{' '}
                <MdOutlineAddShoppingCart
                  style={{ marginLeft: '5px', marginBottom: '2px' }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="description_container">
        <section id="description" className="description">
          <div className="description-title">
            <h4>Description</h4>
          </div>
          <div className="description-content">
            <p>{data.description}</p>
          </div>
        </section>

        <section id="related_products" className="related_products">
          <div className="related_products-title">
            <h4>Related Products</h4>
            <Carousel products={[data, ...products]} />
          </div>
        </section>

        {/* Other sections and components */}
      </div>
    </>
  )
}

export default ProductDetails
