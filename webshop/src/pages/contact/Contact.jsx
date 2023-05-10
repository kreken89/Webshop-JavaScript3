import React from 'react'




const Contact = () => {
  return (
    <>
    <section class="contact-wrap">
  <form action="#" class="contact-form">
      <h3 className='title'>Contact us!</h3>
    <div class="user-details">
      <div class="input-box">
        <label for="fullName">Your Name <span className='required'>*</span></label>
        <input type="text" id="fullName" class="form-control" required/>
      </div>
      <div class="input-box">
        <label for="email">Your Email <span className='required'>*</span></label>
        <input type="email" id="email" class="form-control" required/>
      </div>
      <div class="input-box">
        <label for="phoneNumber">Phone Number <span className='required'>*</span></label>
        <input type="number" id="phoneNumber" class="form-control" required/>
      </div>
      <div class="input-box">
        <label for="company">Company <span className='optinal'>(optinal)</span></label>
        <input type="text" id="company" class="form-control"/>
      </div>
      <div class="input-box">
        <label for="message">Write something <span className='required'>*</span></label>
        <textarea rows="6" type="text" id='message' class="form-control text-area" required></textarea>
      </div>
    </div>
    <div className="terms">
      <input type="checkbox" />
      <label htmlFor=""> I accept to save my personal details</label>
      
    </div>
    
    
    
    
      <button class="submit-btn">Submit</button>
    
  </form>

</section>
     
    </>
  )
}

export default Contact