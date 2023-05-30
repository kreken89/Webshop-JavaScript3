// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { auth } from '../../firebase/config'

// export const handleLogout = async () => {
//   try {
//     if (user) await auth.signOut()
//     // Navigate to the homepage after logging out
//     window.location.href = '/'
//     // navigate('/')
//   } catch (err) {
//     console.log(err.message)
//   }
//   // const navigate = useNavigate()
//   // useEffect(() => {
//   //   if (user) {
//   //     navigate('/')
//   //   }
//   // }, [user])
// }

// const Logout = () => {
//   const navigate = useNavigate()

//   return <button onClick={() => handleLogout(navigate)}>Logout</button>
// }

// export default Logout

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

