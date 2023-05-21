import React, { useState, useEffect } from 'react';
import logo from '../../assets/placeholders/Logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { auth } from '../../firebase/utils';
import { handleLogout } from '../../pages/login/LogOut';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { useSelector } from 'react-redux';

const Header = () => {
  const { totalQuantity } = useSelector(state => state.shoppingCart);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsAuthenticated(user !== null);
    });
    return unsubscribe;
  }, []);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header>
      <nav className="nav_container">
        <div className="logo_div">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="nav_links_div">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            {isAuthenticated ? (
              <>
                <li>
                  <NavLink onClick={() => handleLogout(history)}>
                    Logout
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/orders">My orders</NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            )}
            <li className="nav-item dropdown">
              <span
                className="nav-link"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#cartDropdown"
                aria-expanded={isCartOpen ? 'true' : 'false'}
                onClick={toggleCart}
              >
                <FaShoppingCart />
                {totalQuantity > 0 && (
                  <span className='position-absolut start-100 translate-middle badge rounded-pill bg-danger'>{totalQuantity}</span>
                )}
              </span>
              <div
                id="cartDropdown"
                className={`dropdown-menu dropdown-menu-end shopping-cart ${isCartOpen ? 'show' : ''}`}
              >
                <ShoppingCart />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
