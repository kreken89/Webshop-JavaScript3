import {useState, useEffect} from 'react'
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart'
import {addOrder, addToCart, placeOrder, clearCart} from '../../store/features/shoppingCart/shoppingCartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SmallHero from '../../components/smallHero/SmallHero'






const Checkout = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  
  const cart = useSelector((state) => state.shoppingCart.cart);
  const totalAmount = useSelector((state) => state.shoppingCart.totalAmount)

  const user = useSelector((state) => state.auth.user)

  const [orderData, setOrderData] = useState({
    status: "pending",
    userId: '',
    totalAmount: 0
  })



  const handleSubmit = (e) => {
    e.preventDefault()
    const orderItems = cart.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
        imageURL: item.product.imageURL,
        name: item.product.name,
        price: item.product.price,
        size: item.product.selectedSize
      }));
    const data = {
        ...orderData,
        item: orderItems,
        userId: user.uid,
        totalAmount: totalAmount
     
        
      }

 
   
    dispatch(addOrder(data))
    dispatch(clearCart())
  }



  useEffect(() => {
    if (user === null) {
      navigate('/login')
    }
  }, [user])


  return (
    <>
    <SmallHero page="Checkout" description="" />
    <div className="main_container">
      <h1>Please complete your purchase</h1>
      <ShoppingCart checkout={true} />

      <button className="btn btn-success mb-3" onClick={handleSubmit}>
        Place Order
      </button>

    </div>
    </>
    
  )
}

export default Checkout