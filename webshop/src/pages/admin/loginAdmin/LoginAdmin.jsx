import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginAdmin, setError } from '../../../store/features/auth/authSlice'
import { FaGoogle } from 'react-icons/fa'

const LoginAdmin = () => {
  const navigate = useNavigate()

  const { user, loading, error } = useSelector(state => state.auth)
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
    await dispatch(loginAdmin(formData))
    setSubmitted(true)
  }

  useEffect(() => {
    if (submitted && user) {
      navigate('/admin-panel')
    }
  }, [submitted, user])

  return (
    <div className="login_sign_container">
      <section className="login-wrap">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="login_container">
            <h2>Administrator login</h2>
          </div>
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
            <button className="social_login_btn">
              <FaGoogle />
            </button>
          </div>
          <div className="terms">
            <p>
              You don't have an account? /{' '}
              <Link to="/register-admin">Register here</Link>
            </p>
          </div>
        </form>
      </section>
    </div>
  )
}

export default LoginAdmin
