import React from 'react'
import LoginForm from '../../components/loginForm/LoginForm'
import { auth, provider } from '../../firebase/utils'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password)
      navigate('/')
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      const result = await auth.signInWithPopup(provider)
      const user = result.user
      // Here you can store the new user in Firebase

      navigate('/') // Navigate to home page after successful Google sign-in
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="login_sign_container">
      <div className="login_container">
        <h2>Login</h2>
        <div className="info_login">
          <span>Please Login to Your Account</span>
        </div>
        <LoginForm onGoogleSignIn={handleGoogleSignIn} onClick={handleLogin} />
      </div>
    </div>
  )
}

export default Login