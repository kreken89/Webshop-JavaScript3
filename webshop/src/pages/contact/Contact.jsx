import React from 'react'




const Contact = () => {
  return (
    <>
    <section className="contact-wrap">
  <form action="#" className="contact-form">
      <h3 className='title'>Contact us!</h3>
    <div className="user-details">
      <div className="input-box">
        <label htmlFor="fullName">Your Name <span className='required'>*</span></label>
        <input type="text" id="fullName" className="form-control" required/>
      </div>
      <div className="input-box">
        <label htmlFor="email">Your Email <span className='required'>*</span></label>
        <input type="email" id="email" className="form-control" required/>
      </div>
      <div className="input-box">
        <label htmlFor="phoneNumber">Phone Number <span className='required'>*</span></label>
        <input type="number" id="phoneNumber" className="form-control" required/>
      </div>
      <div className="input-box">
        <label htmlFor="company">Company <span className='optinal'>(optinal)</span></label>
        <input type="text" id="company" className="form-control"/>
      </div>
      <div className="input-box">
        <label htmlFor="message">Write something <span className='required'>*</span></label>
        <textarea rows="6" type="text" id='message' className="form-control text-area" required></textarea>
      </div>
    </div>
    <div className="terms">
      <input type="checkbox" />
      <label htmlFor=""> I accept to save my personal details</label>
      
    </div>
    
    
    
    
      <button className="submit-btn">Submit</button>
    
  </form>

</section>
     
    </>
  )
}

export default Contact