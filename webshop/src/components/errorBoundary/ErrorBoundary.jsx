import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    })
    // You can also log the error to an error tracking service here
  }

  render() {
    if (this.state.hasError) {
      // You can customize the error message or render a fallback UI
      return <div>Error: {this.state.error.toString()}</div>
    }
    // Render the wrapped component as normal
    return this.props.children
  }
}

export default ErrorBoundary
