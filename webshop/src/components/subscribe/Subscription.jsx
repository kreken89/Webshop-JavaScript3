import React from 'react'
import './Subscription.scss'

const Subscription = () => {
  return (
    <>
    <div className="subscribe">
      <div className="sub-formgroup">
        <form action="#" className='sub-form'>
        <input className="sub-email" type="email" placeholder='Enter your email here'  />
        <button className='sub-btn'>SUBSCRIBE FOR NEWSLETTER </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Subscription