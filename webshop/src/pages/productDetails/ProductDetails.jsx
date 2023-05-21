import Details from '../../components/details/Details'
import Carousel from '../../components/slider/Carousel'
import { addToCart } from '../../store/features/shoppingCart/shoppingCartSlice'

const ProductDetails = () => {
  return (
    <div>
      <Details />
      <Carousel />
    </div>
  )
}

export default ProductDetails
