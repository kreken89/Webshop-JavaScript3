import React from 'react'
import Header from '../../components/header/Header'

const Contact = () => {
  return (
    <>
    <section class="contact-wrap">
      <h3>Contact us!</h3>
  <form action="" class="contact-form">
    <div class="">
      <div class="">
        <label for="fullName">Your Name <span className='required'>*</span></label>
        <input type="text" id="fullName" class="form-control"/>
      </div>
    </div>
    <div class="">
      <div class="">
        <label for="email">Your Email <span className='required'>*</span></label>
        <input type="email" id="email" class="form-control"/>
      </div>
    </div>
    <div class="">
      <div class="">
        <label for="phoneNumber">Phone Number<span className='required'>*</span></label>
        <input type="number" id="phoneNumber" class="form-control"/>
      </div>
    </div>
    <div class="">
      <div class="">
        <label for="company">Company <span className='optinal'>(optinal)</span></label>
        <input type="text" id="company" class="form-control"/>
      </div>
    </div>
    <div class="">
      <div class="">
        <label for="message">Write something <span className='required'>*</span></label>
        <textarea rows="3" type="text" id='message' class="form-control"></textarea>
      </div>
    </div>
    
      <button class="submit-btn">Send</button>
    
  </form>
</section>

     
    </>
  )
}

export default Contact