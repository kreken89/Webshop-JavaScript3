// import React from 'react'
// import { auth } from '../../firebase/utils'

// export const handleLogout = async (history) => {
//   try {
//     await auth.signOut()
//     // Navigate to the homepage after logging out
//     history.push('/')
//   } catch (error) {
//     console.log(error.message)
//   }
// }

// const Logout = ({ history }) => {
//   return <button onClick={() => handleLogout(history)}>Logout</button>
// }

// export default Logout

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/utils'

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
