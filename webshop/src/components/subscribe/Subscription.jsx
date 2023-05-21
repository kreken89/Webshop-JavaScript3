import { useState } from 'react'
import './Subscription.scss'

const Subscription = () => {
  const [formData, setFormData] = useState({
    email: '',
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((data) => ({ ...data, [id]: value }))
  }


  return (
    <>
      <div className="subscribe">
        <div className="sub-formgroup">
          <form action="#" className="sub-form">
            <input
              className="sub-email"
              type="email"
              placeholder="Enter your email here"
              value={formData.email}
              onChange={handleChange}
            />
            <button className="sub-btn">SUBSCRIBE FOR NEWSLETTER </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Subscription