import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ path, element }) => {
  const { user } = useSelector((state) => state.auth)

  // Check if the user is logged in and is an admin
  const isAuthenticated = user && user.isAdmin

  return isAuthenticated ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login-admin" replace={true} state={{ from: path }} />
  )
}

export default ProtectedRoute
