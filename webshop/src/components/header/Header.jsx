import React from 'react'
import styles from './Header.module.scss'
import logo from "../../assets/placeholders/Logo.svg"
import {Link, } from 'react-router-dom'
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
       
        <div className={styles["header-right"]}>
          <span className={styles.links}>
          {user ? (
          <>
          <Link to="/orders">My orders</Link>
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