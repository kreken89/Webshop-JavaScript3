import {useState, useEffect} from 'react'

import {getOrders} from '../../store/features/shoppingCart/shoppingCartSlice'
import { useSelector, useDispatch } from 'react-redux'


const MyAccountOrders = () => {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
 
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await dispatch(getOrders(user.uid));
        const ordersData = response.payload;
        console.log(ordersData);
        setOrders(ordersData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, [user.uid]);
  
  return (
    <div>
      <h4>My Account Orders</h4>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        orders && orders.length > 0 ? (
          orders.map((order) => {
            return (
              <div className="orderContainer" key={order.id}>
                <p className="fat">Order Status: {order.status}</p>
                <p></p>
                <h5>Items:</h5>
                <ul>
                  {order.item.map((item) => (
                    <li key={item.id}>
                      <img src={item.imageURL} alt={item.name} />
                      <p>Item Name: {item.name}</p>
                      <p>Size: {item.size}</p>
                      <p>Item Price: {item.price} kr</p>
                      <p>Item Quantity: {item.quantity}</p>
                      
                    </li>
                  ))}
                </ul>
                <p className="fat">Order Total: {order.totalAmount} kr</p>
              </div>
            
            );
          })
        ) : (
          <p>No orders found.</p>
        )
      )}
    </div>
  )
}

export default MyAccountOrders