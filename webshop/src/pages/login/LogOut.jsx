import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/config'

export const handleLogout = async (navigate) => {
  // const navigate = useNavigate()
  try {
    await auth.signOut()
    // Navigate to the homepage after logging out
    window.location.href = '/'
    // navigate('/')
  } catch (error) {
    console.log(error.message)
  }
}

const Logout = () => {
  const navigate = useNavigate()

  return <button onClick={() => handleLogout(navigate)} >Logout</button>
}

export default Logout
