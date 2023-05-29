import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, closeCart } from '../../store/features/shoppingCart/shoppingCartSlice';
import CartProduct from './CartProduct';

const ShoppingCart = ({ checkout }) => {
  const { cart, totalAmount, isOpen } = useSelector(state => state.shoppingCart);
  const dispatch = useDispatch();
  const cartRef = useRef(null);

  const handleClickOutsideCart = event => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      dispatch(closeCart()); // Dispatch the action to close the cart
    }
  };

  useEffect(() => {
    const handleEscKey = event => {
      if (event.keyCode === 27 && isOpen) {
        dispatch(closeCart()); // Dispatch the action to close the cart when Esc key is pressed
      }
    };

    document.addEventListener('mousedown', handleClickOutsideCart);
    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideCart);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]); // Add isOpen as a dependency to reattach event listeners when it changes

  const handleClearCart = () => {
    dispatch(clearCart()); // Dispatch the action to clear the cart
  };

  return (
    <div className={`shopping-cart ${isOpen ? 'open' : ''}`}>
      <div className="cart-pop-up" ref={cartRef}>
        {cart.length < 1 && (
          <div className="p-2 text-center"> Your cart is empty</div>
        )}
        {cart.map(item => (
          <CartProduct key={'cart' + item.product.id} item={item} />
        ))}
        <div className="dropdown-divider"></div>
        <div className="d-flex justify-content-between align-items-center p-2">
          <div>
            <p className="m-0">Total Price: {totalAmount}</p>
            <p className="text-muted">Ink. vat</p>
          </div>
          <div>
            {!checkout && (
              <>
                <button
                  className="btn btn-warning"
                  onClick={handleClearCart}
                >
                  Clear cart
                </button>
                <Link to="/checkout" className="btn btn-success ms-2">
                  Checkout
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
