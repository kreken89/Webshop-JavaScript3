import React from 'react'

import Footer from './components/Footer'

import './App.scss'


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