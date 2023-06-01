import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import './App.scss'

// Pages
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import Contact from './pages/contact/Contact'
import ProductDetails from './pages/productDetails/ProductDetails'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import MyAccount from './pages/myAccount/MyAccount'
import Checkout from './pages/checkout/Checkout'

// Components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Subscription from './components/subscribe/Subscription'
import SmallHero from './components/smallHero/SmallHero'

// Firebase
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/config'
import { useDispatch, useSelector } from 'react-redux'
import { authReady } from './store/features/auth/authSlice'

const App = () => {
  const { authIsReady, user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()



  useEffect(() => {
    onAuthStateChanged(auth, (_user) => {
      
      let user = null

      if (_user) {
        
        user = {
          uid: _user.uid,
          email: _user.email,
        }
      }

      dispatch(authReady(user))
    })
  }, [dispatch, onAuthStateChanged])

  return (
    <>
      {authIsReady ? (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/productDetails/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Subscription />
          <Footer />
        </Router>
      ) : null}
    </>
  )
}

export default App
