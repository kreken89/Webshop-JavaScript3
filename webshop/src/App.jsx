import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Products from './pages/products/Products'
import Footer from './components/footer/Footer'
import './App.scss'
import Subscription from './components/subscribe/Subscription'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Subscription />
        <Footer />
      </Router>
    </>
  )
}

export default App
