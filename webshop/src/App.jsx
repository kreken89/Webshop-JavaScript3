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
import LogOut from './pages/login/LogOut'
import MyAccount from './pages/myAccount/MyAccount'

// Admin pages
import ProtectedRoute from './components/protectedRoute/ProtectedRoute'

import LoginAdmin from './pages/admin/loginAdmin/LoginAdmin'
import RegisterAdmin from './pages/admin/registerAdmin/RegisterAdminPage'
import Admin from './pages/admin/Admin'
import AddProduct from './pages/admin/addProduct/AddProduct'
import Orders from './pages/admin/orders/Orders'

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

  const isAdmin = user && user.isAdmin

  useEffect(() => {
    onAuthStateChanged(auth, (_user) => {
      console.log(_user)
      let user = null

      if (_user) {
        user = {
          uid: _user.uid,
          email: _user.email,
        }
      }

      dispatch(authReady(user))
    })
  }, [dispatch])

  return (
    <>
      {authIsReady ? (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/my-account" element={<MyAccount />} />
            {/* Admin route */}
            <Route path="/login-admin" element={<LoginAdmin />} />
            <Route path="/register-admin" element={<RegisterAdmin />} />
            <Route
              element={
                <ProtectedRoute
                  isAdmin={isAdmin}
                  path="/admin-panel"
                  element={<Admin />}
                />
              }
            />
            <Route
              element={
                <ProtectedRoute
                  isAdmin={isAdmin}
                  path="/addProduct"
                  element={<AddProduct />}
                />
              }
            />
            <Route
              element={
                <ProtectedRoute
                  isAdmin={isAdmin}
                  path="/orders"
                  element={<Orders />}
                />
              }
            />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Subscription />
          <Footer />
        </Router>
      ) : null}
    </>
  )
}

export default App
