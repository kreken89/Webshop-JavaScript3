

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/config'

export const handleLogout = async () => {
  try {
    await auth.signOut()
    // Redirect to the homepage after logging out
    window.location.assign('/')
    window.location.reload()
  } catch (err) {
    console.log(err.message)
  }
}

const Logout = () => {
  const navigate = useNavigate()

  const handleLogoutClick = async () => {
    
    try {
      await auth.signOut()
      // Redirect to the homepage after logging out
      navigate('/')
    } catch (err) {
      console.log(err.message)
    }
  }

  return <button onClick={handleLogoutClick}>Logout</button>
}

export default Logout

