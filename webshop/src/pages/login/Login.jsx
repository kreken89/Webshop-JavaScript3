import React from 'react'
import LoginForm from '../../components/loginForm/LoginForm'

const Login = () => {
 
  return (
    <div className="login_sign_container">
      <div className="login_container">
        <h2>Login</h2>
        <div className="info_login">
          <span>Please Login to Your Account</span>
        </div>
        <LoginForm />
        {/* <LoginForm onGoogleSignIn={handleGoogleSignIn} onClick={handleLogin} /> */}
      </div>
    </div>
  )
}

export default Login