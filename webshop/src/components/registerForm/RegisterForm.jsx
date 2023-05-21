// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import { auth, db } from '../../firebase/config'
// import { collection, addDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FormsBtn from '../loginForm/FormsBtn'
import { FaGoogle } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { registerUser, setError } from '../../store/features/auth/authSlice'

const RegisterForm = () => {
  const { user, loading, error } = useSelector(state => state.auth)
  const dispatch = useDispatch()
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
  }, [submitted, user])

  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [address, setAddress] = useState('')
  // const [city, setCity] = useState('')
  // const [postalCode, setPostalCode] = useState('')
  // const [phoneNumber, setPhoneNumber] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [passwordConfirm, setPasswordConfirm] = useState('')

  // const handleRegister = async (e) => {
  //   e.preventDefault()

  //   if (password !== passwordConfirm) {
  //     alert('Passwords do not match')
  //     return
  //   }

  //   try {
  //     const { user } = await createUserWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     )

  //     console.log(user)

  //     const userData = {
  //       firstName,
  //       lastName,
  //       email,
  //       city,
  //       address,
  //       postalCode,
  //       phoneNumber,
  //     }

  //     // Save userData to Firestore
  //     const docRef = await addDoc(collection(db, 'users'), userData)
  //     console.log('User document written with ID: ', docRef.id)

  //     // Save userData to Firebase database or Firestore
  //     console.log(userData)

  //     // Optionally, you can redirect the user to another page
  //     // after successful registration
  //     // history.push('/dashboard');
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
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

            <button type="submit" className="btn btn-primary">
              Register
            </button>

            <div className="social_login">
              <h3>Login with Google</h3>
              <FormsBtn className="social_login_btn">
                <FaGoogle />
              </FormsBtn>
            </div>
            <div>
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
