import { createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../firebase/utils'
import { db } from '../../firebase/utils'
import { collection, addDoc } from 'firebase/firestore'
import { useState } from 'react'

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault()

    if (password !== passwordConfirm) {
      alert('Passwords do not match')
      return
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
    
      console.log(user)

      const userData = {
        firstName,
        lastName,
        email,
        city,
        address,
        postalCode,
        phoneNumber,
      }

      // Save userData to Firestore
      const docRef = await addDoc(collection(db, 'users'), userData)
      console.log('User document written with ID: ', docRef.id)

      // Save userData to Firebase database or Firestore
      console.log(userData)

      // Optionally, you can redirect the user to another page
      // after successful registration
      // history.push('/dashboard');
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section className="register-wrap">
      <form onSubmit={handleRegister} className="contact-form">
        <label htmlFor="firstName">
          Enter Your First Name <span className="required">*</span>
        </label>
        <input
          type="text"
          id="firstName"
          className="form-control"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="lastName">
          Enter Your Last Name <span className="required">*</span>
        </label>
        <input
          type="text"
          id="lastName"
          className="form-control"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="address">
          Enter Your Address <span className="required">*</span>
        </label>
        <input
          type="text"
          id="address"
          className="form-control"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label htmlFor="city">
          Enter Your City <span className="required">*</span>
        </label>
        <input
          type="text"
          id="city"
          className="form-control"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <label htmlFor="postal_code">
          Postal Code <span className="required">*</span>
        </label>
        <input
          type="text"
          id="postal_code"
          className="form-control"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />

        <label htmlFor="phoneNumber">
          Phone Number <span></span>
        </label>
        <input
          type="number"
          id="phoneNumber"
          className="form-control"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label htmlFor="email">
          Your Email <span className="required">*</span>
        </label>
        <input
          type="email"
          id="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="passwordConfirm">
          Confirm Password <span className="required">*</span>
        </label>
        <input
          type="password"
          id="passwordConfirm"
          className="form-control"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
        />

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </section>
  )
}

export default RegisterForm
