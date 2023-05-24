import {useState} from 'react'
import ShoppingCart from '../../components/shoppingCart/ShoppingCart'
import {addOrder, addToCart, placeOrder,} from '../../store/features/shoppingCart/shoppingCartSlice'
import { useSelector, useDispatch } from 'react-redux'
// import { getFirestore } from 'firebase/firestore';




const Checkout = () => {

  const dispatch = useDispatch()
  
  const cart = useSelector((state) => state.shoppingCart.cart);

  console.log(cart)

  const [orderData, setOrderData] = useState({
    productId: cart[0].product.id,
    quantity: cart[0].quantity,
    status: "pending",
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
    const data = {
        ...orderData,
       
     
        //  productId: product.id
      }
 
   console.log(cart[0].product.id)
    dispatch(addOrder(data))
    
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
    <div className='mt-5'>
        <h1>Please complete your purchase</h1>
        <ShoppingCart checkout={true}/>

        <button className='btn btn-success'onClick={handleSubmit}>checkout</button>

        <h2>Confirm your order and shipping adress </h2>
        <section className="register-wrap">
      
      <form className="contact-form">
        <div className="user-details">
          <div className="input-box">
            <label htmlFor="firstName">
              First Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              className="form-control"
            
            />

            <label htmlFor="lastName">
              Last Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              className="form-control"
              
            />

            <label htmlFor="address">
              Address <span className="required">*</span>
            </label>
            <input
              type="text"
              id="address"
              className="form-control"
              
             
            />

            <label htmlFor="city">
               City <span className="required">*</span>
            </label>
            <input
              type="text"
              id="city"
              className="form-control"
              
            
            />

            <label htmlFor="postal_code">
              Postal Code <span></span>
            </label>
            <input
              type="text"
              id="postal_code"
              className="form-control"
             
           
            />

            <label htmlFor="phoneNumber">
              Phone Number <span></span>
            </label>
            <input
              type="text"
              id="phoneNumber"
              className="form-control"
           
             
            />
          </div>

          <div className="input-box">
            <label htmlFor="email">
              Your Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="form-control"

            />
          </div>
        </div>
      </form>
    </section>
    </div>
  )
}

export default Checkout