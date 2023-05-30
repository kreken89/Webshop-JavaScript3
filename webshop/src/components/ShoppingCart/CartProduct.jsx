import React from 'react'
import { useDispatch } from 'react-redux'
import { addOneToCart, removeFromCart, deleteAllFromCart } from '../../store/features/shoppingCart/shoppingCartSlice'
import { Link } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'


const CartProduct = ({ item }) => {

    const dispatch = useDispatch()

    const add = () => {
        dispatch(addOneToCart(item.product))
    }
    const remove = () => {
        dispatch(removeFromCart({id: item.product.id, selectedSize: item.product.selectedSize}))
    }
    const deleteAll = () => {
        dispatch(deleteAllFromCart({id: item.product.id, selectedSize: item.product.selectedSize}))
    }
  return (
    <div className="d-flex justify-content-between align-items-center p-2 gap-3">
        <Link to={`/productDetails/${item.product.id}`} className='d-flex align-items-center text-decoration-none text-dark'>
            <img src={item.product.imageURL} alt={item.product.name} className='img-fluid cart-image' />
            <div>
                <p className='m-0'>{item.product.name} - {item.product.selectedSize}</p>
                <p className='cartProduct-price '>{item.quantity} x {item.product.price} kr</p>
                
            </div>
        </Link>
        <div className='buttons d-flex gap-1'>
            <div className='btn-group btn-group-sm' role='group'>
                <button className='btn btn-sm' onClick={remove}>-</button>
                <button className='btn btn-sm' onClick={add}>+</button>
            </div>
            <button className='btn btn-sm btn-danger' onClick={deleteAll}> <FaTrash /></button>
        </div>
    </div>
  )
}

export default CartProduct

