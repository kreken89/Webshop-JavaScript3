import React from 'react'
import ProductCard from './ProductCard'
import SmallHero from '../../components/smallHero/SmallHero'

const Products = () => {
  return (
    <div className='products_container'>
        <SmallHero page="Products" description="Look your best!"/>
        <h2 className="products-title">All our products</h2>

        <div className="products-categories">
        <li>All</li> /<li>T-shirts</li> /<li>Dress</li> /<li>Shoes</li> /<li>Jeans</li> 
      </div>

        <div className="products-collection">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />

        </div>
    </div>
  )
}

export default Products