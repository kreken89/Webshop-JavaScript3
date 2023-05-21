import React, { useState, useEffect } from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/placeholders/Logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { auth } from '../../firebase/config'
import { handleLogout } from '../../pages/login/LogOut'

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(user !== null)
    })
    return unsubscribe
  }, [])

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
          </ul>
          <span className={styles.cart}>
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
          </span>
        </div>
      </nav>
    </header>
  )
}

export default Header