import { useState } from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/placeholders/Logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../store/features/auth/authSlice'
import ShoppingCart from '../ShoppingCart/ShoppingCart'

const Header = () => {

  const { user, totalQuantity } = useSelector((state) => ({
    user: state.auth.user,
    totalQuantity: state.shoppingCart.totalQuantity,
  }))

  const dispatch = useDispatch()
  const [isCartOpen, setCartOpen] = useState(false)

  const toggleCart = () => {
    setCartOpen((prevState) => !prevState)
  }

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
            {user ? (
              <>
                <li>
                  <NavLink onClick={() => dispatch(logoutUser())}>
                    Logout
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/my-account">My account</NavLink>
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
            <li className="nav-item dropdown custom-dropdown-li">
              <span
                className="nav-link"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#cartDropdown"
                aria-expanded={isCartOpen ? 'true' : 'false'}
                onClick={toggleCart}>
                <FaShoppingCart />
                {totalQuantity > 0 && (
                  <span className="position-absolut start-100 translate-middle badge rounded-pill bg-danger">
                    {totalQuantity}
                  </span>
                )}
              </span>
              <div
                id="cartDropdown"
                className={`dropdown-menu dropdown-menu-end custom-dropdown-menu shopping-cart ${
                  isCartOpen ? 'show' : ''
                }`}>
                <ShoppingCart />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
};

export default Header;
