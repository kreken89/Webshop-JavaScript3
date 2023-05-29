import {useState} from 'react'
import ShoppingCart from '../../components/shoppingCart/ShoppingCart'
import {addOrder, addToCart, placeOrder, clearCart} from '../../store/features/shoppingCart/shoppingCartSlice'
import { useSelector, useDispatch } from 'react-redux'
// import { getFirestore } from 'firebase/firestore';




const Checkout = () => {

  const dispatch = useDispatch()
  
  const cart = useSelector((state) => state.shoppingCart.cart);
  const totalAmount = useSelector((state) => state.shoppingCart.totalAmount)

  const user = useSelector((state) => state.auth.user)

  console.log(cart)
  console.log(user)
  const [orderData, setOrderData] = useState({
    status: "pending",
    userId: '',
    totalAmount: 0
  })

//   const handleChange = (e) => {
//     const { id, value } = e.target
//     setOrderData((order) => {
//       return {
//         ...order,
//         [id]: value,
//       }
//     })
//   }

  const handleSubmit = (e) => {
    e.preventDefault()
    const orderItems = cart.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
        imageURL: item.product.imageURL,
        name: item.product.name,
        price: item.product.price
      }));
    const data = {
        ...orderData,
        item: orderItems,
        userId: user.uid,
        totalAmount: totalAmount
     
        //  productId: product.id
      }
 
   console.log(cart[0].product.id)
    dispatch(addOrder(data))
    dispatch(clearCart())
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  
  //   // Get the order data from the Redux state
  //   const order = placeOrder();
  
  //   // Save the order to Firestore
  //   const ordersCollection = getFirestore().collection('orders');
  //   ordersCollection
  //     .add(order)
  //     .then(() => {
  //       dispatch(addOrder(order));
  //       console.log('Order saved successfully!');
  //     })
  //     .catch((error) => {
  //       console.log('Error saving order:', error);
  //     });
  // };



  return (
    <div className="main_container">
      <h1>Please complete your purchase</h1>
      <ShoppingCart checkout={true} />

      <button className="btn btn-success mb-3" onClick={handleSubmit}>
        Checkout
      </button>

    </div>
  )
}

export default Checkout