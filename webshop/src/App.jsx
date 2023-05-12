import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'

// Pages
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import Contact from './pages/contact/Contact'
import ProductDetails from './pages/productDetails/ProductDetails'
import LoginSignIn from './pages/login/Login'
import Register from './pages/register/Register'

// Components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Subscription from './components/subscribe/Subscription'
import SmallHero from './components/smallHero/SmallHero'

// Import firebase
import { auth } from './firebase/utils'





const App = () => {
  return (
    <>
      <Router>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<LoginSignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Subscription />
        <Footer />
      </Router>
    </>
  )
}

export default App
