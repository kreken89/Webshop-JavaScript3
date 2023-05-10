import React from 'react'
import styles from './Header.module.scss'
import logo from "../../assets/placeholders/Logo.svg"
import {Link, NavLink} from 'react-router-dom'
import {FaShoppingCart} from "react-icons/fa"

const Header = ({user}) => {
  return (
    <>
    <header>
      <div className={styles.header}>
    <img src={logo} alt="" />
       <nav >
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
       
        <div className={styles["header-right"]}>
          <span className={styles.links}>
          {user ? (
          <>
          <NavLink to="/orders">My orders</NavLink>
          <NavLink to="/">Logout</NavLink>
          </>
          ) : (
            <>
            
            <Link to="/login">Login</Link>
            <Link to="/register"> Register</Link>
            </>

        )}
      

            
          </span>
          <span className={styles.cart}>
          <Link to="/cart"><FaShoppingCart/></Link>
          </span>
         
        </div>
       </nav>
      </div>
    </header>

    </>
  )
}

export default Header