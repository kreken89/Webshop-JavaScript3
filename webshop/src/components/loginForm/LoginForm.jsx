import React, { useState } from 'react'
import FormsBtn from './FormsBtn'
import { FaGoogle } from 'react-icons/fa'
import {
  auth,
  signInWithGoogle,
  signInWithEmailAndPassword,
} from '../../firebase/utils'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/utils'

import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../../firebase/config'

// Initialize Firebase
const app = initializeApp(firebaseConfig)


const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(email, password)
      const user = auth.currentUser
      console.log(user)
      if (user) {
        const userRef = doc(db, 'users').doc(user.uid)
        const userData = await getDoc(userRef)
        if (userData.exists()) {
          console.log(userData.data())
          const userDataObj = userData.data()
          // Use the userDataObj for further processing or updating state
        } else {
          // User data does not exist
          console.log('User data not found')
        }
      }
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
      // Handle the error message and display it to the user
      setError(errorMessage)
    }
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    if (id === 'email') {
      setEmail(value)
    } else if (id === 'password') {
      setPassword(value)
    }
  }

  return (
    <section className="login-wrap">
      <form onSubmit={handleSubmit} className="contact-form">
        {error && <p className="error">{error}</p>}
        <div className="user-details">
          <div className="input-box">
            <label htmlFor="email">
              Your Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">
              Password <span className="required">*</span>
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="terms">
          <input type="checkbox" />
          <label htmlFor=""> Please keep me logged in /</label>
          <a href="#"> Forgot Your Password ?</a>
          <br />
          <br />
          <p>
            You don't have an account? / <a href="/register">Register here</a>
          </p>
        </div>

        <button type="submit" className="submit-btn">
          Login
        </button>
        <div className="social_login">
          <h3>Login with Google</h3>
          <FormsBtn onClick={signInWithGoogle} className="social_login_btn">
            <FaGoogle />
          </FormsBtn>
        </div>
      </form>
    </section>
  )
}

export default LoginForm
