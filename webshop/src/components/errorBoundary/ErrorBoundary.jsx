import React, { useState } from 'react'

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false)
  const [error, setError] = useState(null)
  const [errorInfo, setErrorInfo] = useState(null)

  const componentDidCatch = (error, errorInfo) => {
    setHasError(true)
    setError(error)
    setErrorInfo(errorInfo)
  }

  if (hasError) {
    // Render fallback UI or error message
    return <div>Something went wrong!</div>
  }

  // Render the wrapped component if no error occurred
  return children
}

export default ErrorBoundary
