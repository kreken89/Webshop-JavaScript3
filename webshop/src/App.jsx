import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.scss'
import Subscription from './components/subscribe/Subscription'

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
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
