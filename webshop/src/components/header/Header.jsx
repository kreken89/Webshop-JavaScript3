import React from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/placeholders/Logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const Header = ( props ) => {
  return (
    <>
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
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink to="/">Logout</NavLink>
              </li>
              <li>
                <NavLink to="/orders">My orders</NavLink>
              </li>
            </ul>
            <span className={styles.cart}>
              <Link to="/cart">
                <FaShoppingCart />
              </Link>
            </span>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
