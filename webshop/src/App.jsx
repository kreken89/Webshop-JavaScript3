import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'

// Pages
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import Contact from './pages/contact/Contact'
import ProductDetails from './pages/productDetails/ProductDetails'
import Login from './pages/login/Login'
import Admin from './pages/admin/Admin'
import AddProduct from './pages/admin/addProduct/AddProduct'
import Register from './pages/register/Register'
import LogOut from './pages/login/LogOut'

// Components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Subscription from './components/subscribe/Subscription'
import SmallHero from './components/smallHero/SmallHero'

const App = () => {
  

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/login-admin" element={<Admin />} />
          <Route path="/register-admin" element={<Admin />} />
          {/* <Route path="/admin-panel" element={<Admin />} /> */}
          <Route path="/addProduct" element={<AddProduct />} />
        </Routes>
        <Subscription />
        <Footer />
      </Router>
    </>
  )
}

export default App
