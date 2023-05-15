import React from 'react'
import { auth } from '../../firebase/utils'

export const handleLogout = async (history) => {
  try {
    await auth.signOut()
    // Navigate to the homepage after logging out
    history.push('/')
  } catch (error) {
    console.log(error.message)
  }
}

const Logout = ({ history }) => {
  return <button onClick={() => handleLogout(history)}>Logout</button>
}

export default Logout