import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/home/Home'
import Hero from './components/hero/Hero'
import Contact from './pages/contact/Contact'
import BestCollection from './components/bestCollection/BestCollection'
import Footer from './components/Footer'
import './App.scss'

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
