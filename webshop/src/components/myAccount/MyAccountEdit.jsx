import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { authReady } from '../../store/features/auth/authSlice'
import authService from '../../store/features/auth/authService'

const MyAccountEdit = () => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (user) {
          const userData = await authService.retrieveUserData(user.uid)
          dispatch(authReady(userData))
        }
      } catch (error) {
        console.log('Error retrieving user data:', error)
      }
    }

    fetchUserData()
  }, [user, dispatch])

  if (!user) {
    return <div>Please log in to view your account</div>
  }

  return (
    <div>
      <h2>My Account</h2>
      <div>
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
        <p>Address: {user.address}</p>
        <p>City: {user.city}</p>
        <p>Postal Code: {user.postal_code}</p>
        <p>Phone Number: {user.phoneNumber}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  )
}

export default MyAccountEdit
