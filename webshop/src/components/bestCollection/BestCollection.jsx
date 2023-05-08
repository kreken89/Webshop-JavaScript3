import React from 'react'
import BestCollectionCard from './BestCollectionCard'
import { IoReload } from 'react-icons/io5'

const BestCollection = () => {
  return (
    <div className="best_collection-container">
      <h2 className="best_collection-title">Best Collection</h2>
      <div className="best_collection_categories">
        <li>All</li> /<li>Bags</li> /<li>Dress</li> /<li>Decoration</li> /
        <li>Essentials</li> /<li>Interior</li> /<li>Laptop</li> /<li>Mobile</li>{' '}
        /<li>Beauty</li>
      </div>
      <div className="best_collection-products">
        <BestCollectionCard />
        <BestCollectionCard />
        <BestCollectionCard />
        <BestCollectionCard />
        <BestCollectionCard />
        <BestCollectionCard />
        <BestCollectionCard />
        <BestCollectionCard />
      </div>
      <div className="load_more">
        <button className="load_more-btn">
          Load More <IoReload className="loader"/>
        </button>
      </div>
    </div>
  )
}

export default BestCollection