import React from 'react'

const Contact = () => {
  return (
    <>
      <section class="contact-wrap">
        <form action="#" class="contact-form">
          <h3 className="title">Contact us!</h3>
          <div class="user-details">
            <div class="input-box">
              <label for="fullName">
                Your Name <span className="required">*</span>
              </label>
              <input type="text" id="fullName" class="form-control" required />
            </div>
            <div class="input-box">
              <label for="email">
                Your Email <span className="required">*</span>
              </label>
              <input type="email" id="email" class="form-control" required />
            </div>
            <div class="input-box">
              <label for="phoneNumber">
                Phone Number <span className="required">*</span>
              </label>
              <input
                type="number"
                id="phoneNumber"
                class="form-control"
                required
              />
            </div>
            <div class="input-box">
              <label for="company">
                Company <span className="optinal">(optinal)</span>
              </label>
              <input type="text" id="company" class="form-control" />
            </div>
            <div class="input-box">
              <label for="message">
                Write something <span className="required">*</span>
              </label>
              <textarea
                rows="6"
                type="text"
                id="message"
                class="form-control text-area"
                required></textarea>
            </div>
          </div>
          <div className="terms">
            <input type="checkbox" />
            <label htmlFor=""> I accept to save my personal details</label>
          </div>

          <button class="submit-btn">Submit</button>
        </form>
      </section>
      <section className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.770547547894!2d18.0689213160021!3d59.332394980544!2m3!1f0!2f39.99999857731487!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1e3!2sKungsgatan%2033!5e0!3m2!1sda!2sdk!4v1623349128809!5m2!1sda!2sdk"
          width="100%"
          height="450"
          allowfullscreen="Yes"></iframe>
      </section>
    </>
  )
}

export default Contact
