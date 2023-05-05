import React from 'react'
import Header from './components/Header'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'


const App = () => {
  
  return (

    <>
 <Router>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/' element={<Contact/>}/>


    </Routes>
  </Router>
    </>
  )
  
}

export default App