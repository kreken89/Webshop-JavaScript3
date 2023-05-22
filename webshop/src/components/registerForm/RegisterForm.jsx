import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { registerUser, setError } from '../../store/features/auth/authSlice'
import GoogleBtn from '../loginForm/GoogleBtn'

const RegisterForm = () => {
  const { user, loading, error } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate() 
  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    phoneNumber: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((data) => ({ ...data, [id]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.password !== formData.passwordConfirm) {
      dispatch(setError('Passwords do not match'))
      return
    }
    await dispatch(registerUser(formData))
    setSubmitted(true)
  }

  useEffect(() => {
    if (submitted && user) {
      navigate('/')
    }
  }, [submitted, user, navigate])

  return (
    <section className="register-wrap">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="user-details">
          <div className="input-box">
            <label htmlFor="firstName">
              Enter Your First Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              className="form-control"
              value={formData.firstName}
              onChange={handleChange}
            />

            <label htmlFor="lastName">
              Enter Your Last Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              className="form-control"
              value={formData.lastName}
              onChange={handleChange}
            />

            <label htmlFor="address">
              Enter Your Address <span className="required">*</span>
            </label>
            <input
              type="text"
              id="address"
              className="form-control"
              value={formData.address}
              onChange={handleChange}
            />

            <label htmlFor="city">
              Enter Your City <span className="required">*</span>
            </label>
            <input
              type="text"
              id="city"
              className="form-control"
              value={formData.city}
              onChange={handleChange}
            />

            <label htmlFor="postal_code">
              Postal Code <span></span>
            </label>
            <input
              type="text"
              id="postal_code"
              className="form-control"
              value={formData.postalCode}
              onChange={handleChange}
            />

            <label htmlFor="phoneNumber">
              Phone Number <span></span>
            </label>
            <input
              type="text"
              id="phoneNumber"
              className="form-control"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

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

            <label htmlFor="passwordConfirm">
              Confirm Password <span className="required">*</span>
            </label>
            <input
              type="password"
              id="passwordConfirm"
              className="form-control"
              value={formData.passwordConfirm}
              onChange={handleChange}
              required
            />

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <button type="submit" className="submit-btn">
              Register
            </button>

            <div className="social_login">
              <h3>Login with Google</h3>
              <GoogleBtn setSubmitted={setSubmitted} />
            </div>
            <div className="terms">
              <p>
                You already have an account? /{' '}
                <Link to="/login">Login here</Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}

export default RegisterForm
