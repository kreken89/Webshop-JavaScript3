import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProducts } from '../../store/features/products/productListSlice'
import BestCollectionCard from './BestCollectionCard'
import { IoReload } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const BestCollection = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts(8)) // Fetch initial 8 products
  }, [dispatch])

  const products = useSelector((state) => state.productList.products)

  const [visibleProducts, setVisibleProducts] = useState(8)

  const handleLoadMoreClick = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4)
    dispatch(getProducts(visibleProducts + 4)) // Fetch additional 4 products
  }

  return (
    <section id="best_collection">
      <div className="best_collection-container">
        <h2 className="best_collection-title">Best Collection</h2>
        <div className="best_collection_categories">
          <li>All</li> /<li>Man</li> /<li>Woman</li>
        </div>
        <div className="best_collection-products">
          {products.slice(0, visibleProducts).map((product) => (
            <BestCollectionCard key={product.id} product={product} />
          ))}
        </div>
        {visibleProducts < products.length && (
          <div className="load_more">
            <button className="load_more-btn" onClick={handleLoadMoreClick}>
              Load More <IoReload className="loader" />
            </button>
            <button className="load_more-btn">
             <Link to='/products'>Products</Link>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default BestCollection

// import React, { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { getProducts } from '../../store/features/products/productListSlice'
// import BestCollectionCard from './BestCollectionCard'
// import { IoReload } from 'react-icons/io5'
// import { useSelector } from 'react-redux'

// const BestCollection = () => {
//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(getProducts())
//   }, [dispatch])

//   const products = useSelector((state) => state.productList.products)

//   const [visibleProducts, setVisibleProducts] = useState(8)

//   const handleLoadMoreClick = () => {
//     setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4)
//   }

//   return (
//     <section id="best_collection">
//       <div className="best_collection-container">
//         <h2 className="best_collection-title">Best Collection</h2>
//         <div className="best_collection_categories">
//           <li>All</li> /<li>Bags</li> /<li>Dress</li> /<li>Decoration</li> /
//           <li>Essentials</li> /<li>Interior</li> /<li>Laptop</li> /
//           <li>Mobile</li> /<li>Beauty</li>
//         </div>
//         <div className="best_collection-products">
//           {products.slice(0, visibleProducts).map((product) => (
//             <BestCollectionCard key={product.id} product={product} />
//           ))}
//         </div>
//         {visibleProducts < products.length && (
//           <div className="load_more">
//             <button className="load_more-btn" onClick={handleLoadMoreClick}>
//               Load More <IoReload className="loader" />
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }

// export default BestCollection

// import React from 'react'
// import BestCollectionCard from './BestCollectionCard'
// import { IoReload } from 'react-icons/io5'

// const BestCollection = () => {
//   return (
//     <section id='best_collection'>
//     <div className="best_collection-container">
//       <h2 className="best_collection-title">Best Collection</h2>
//       <div className="best_collection_categories">

//         <li>All</li> /<li>Bags</li> /<li>Dress</li> /<li>Decoration</li> /
//         <li>Essentials</li> /<li>Interior</li> /<li>Laptop</li> /<li>Mobile</li>{' '}
//         /<li>Beauty</li>
//       </div>
//       <div className="best_collection-products">
//         <BestCollectionCard />
//         <BestCollectionCard />
//         <BestCollectionCard />
//         <BestCollectionCard />
//         <BestCollectionCard />
//         <BestCollectionCard />
//         <BestCollectionCard />
//         <BestCollectionCard />
//       </div>
//       <div className="load_more">
//         <button className="load_more-btn">
//           Load More <IoReload className="loader"/>
//         </button>
//       </div>
//     </div>
//     </section>
//   )
// }

// export default BestCollection
