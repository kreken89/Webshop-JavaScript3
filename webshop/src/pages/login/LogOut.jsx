import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/config'

export const handleLogout = async (navigate) => {
  try {
    await auth.signOut()
    // Navigate to the homepage after logging out
    window.location.href = '/'
  } catch (error) {
    console.log(error.message)
  }
}

const Logout = () => {
  const navigate = useNavigate()

  return <button onClick={() => handleLogout(navigate)}>Logout</button>
}

export default Logout
