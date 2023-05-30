import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../../store/features/shoppingCart/shoppingCartSlice'
import CartProduct from './CartProduct'

const ShoppingCart = ({ checkout }) => {
    const { cart, totalAmount } = useSelector(state => state.shoppingCart)
    const dispatch = useDispatch()
    const cartRef = useRef(null)

    


  return (
    <div ref={cartRef} onClick={e => e.stopPropagation()}>
        {cart.length < 1 && (

            <div className="p-2 text-center"> Your cart is empty</div>
            )}
            {cart.map(item => <CartProduct key={`${item.product.id}+${item.product.size}`} item={item} />)}
            <div className="dropdown-divider"></div>
            <div className="d-flex justify-content-between align-items-center p-2"> 
            <div>
                <p className='m-0'>Total Price: { totalAmount } kr</p>
                <p className='text-muted'> Ink. vat</p>
            </div>
            <div>
                {!checkout &&
                <>
                <button className='btn btn-warning' onClick={() => dispatch(clearCart())}>Clear cart</button>
                <Link to='/checkout' className='btn btn-success ms-2'>To Checkout</Link>
                </>
                }
                
            </div>
             </div>
    </div>
  )
}

export default ShoppingCart
