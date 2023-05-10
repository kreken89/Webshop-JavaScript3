import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Products from './pages/products/Products'
import Footer from './components/footer/Footer'
import './App.scss'
import Subscription from './components/subscribe/Subscription'
import ProductDetails from './pages/productDetails/ProductDetails'


// Pages
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'



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
        </Routes>
        <Subscription />
        <Footer />
      </Router>
    </>
  )
}

export default App
