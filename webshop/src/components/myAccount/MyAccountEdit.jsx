import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../../store/features/auth/authSlice'

const MyAccountEdit = () => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postal_code: '',
    phoneNumber: '',
    email: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(update(formData))
  }

  useEffect(() => {
    if (user) {
      const {
        firstName = '',
        lastName = '',
        address = '',
        city = '',
        postal_code = '',
        phoneNumber = '',
        email = '',
      } = user

      setFormData({
        firstName,
        lastName,
        address,
        city,
        postal_code,
        phoneNumber,
        email,
      })
    }
  }, [user])

  if (!user) {
    return <div>Please log in to view your account</div>
  }

  return (
    <div>
      <h2>My Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
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
            value={formData.postal_code}
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

          {/* Include other form fields for address, city, postal code, etc. */}

          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  )
}

export default MyAccountEdit
