import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  loginUser,
  setError,
} from '../../store/features/auth/authSlice'
import GoogleBtn from './GoogleBtn'

const LoginForm = () => {
  const navigate = useNavigate()

  const { user, loading, error } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((data) => ({ ...data, [id]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (
      formData.email !== formData.email ||
      formData.password !== formData.password
    ) {
      dispatch(setError('Email or password is incorrect, please try again!'))
      return
    }
    await dispatch(loginUser(formData))
    setSubmitted(true)
  }

  useEffect(() => {
    if (submitted && user) {
      navigate('/')
    }
  }, [submitted, user])

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
              value={formData.email}
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
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        <button type="submit" className="submit-btn">
          Login
        </button>
        <div className="social_login">
          <h3>Login with Google</h3>
          <GoogleBtn setSubmitted={setSubmitted} />
        </div>
        <div className="terms">
          <p>
            You don't have an account? /{' '}
            <Link to="/register">Register here</Link>
          </p>
        </div>
      </form>
    </section>
  )
}

export default LoginForm
