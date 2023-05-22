import React from 'react'

const Contact = () => {
  return (
    <>
      <section className="contact-wrap">
        <form action="#" className="contact-form">
          <h3 className="title">Contact us!</h3>
          <div className="user-details">
            <div className="input-box">
              <label htmlFor="fullName">
                Your Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                className="form-control"
                required
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
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="phoneNumber">
                Phone Number <span className="required">*</span>
              </label>
              <input
                type="number"
                id="phoneNumber"
                className="form-control"
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="company">
                Company <span className="optional">(optional)</span>
              </label>
              <input type="text" id="company" className="form-control" />
            </div>
            <div className="input-box">
              <label htmlFor="message">
                Write something <span className="required">*</span>
              </label>
              <textarea
                rows="6"
                type="text"
                id="message"
                className="form-control text-area"
                required></textarea>
            </div>
          </div>
          <div className="terms">
            <input type="checkbox" />
            <label htmlFor=""> I accept to save my personal details</label>
          </div>

          <button className="submit-btn">Submit</button>
        </form>
      </section>
      <section className="map">
        <section className="map">
          <div className="map-container">
            <section className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.770547547894!2d18.0689213160021!3d59.332394980544!2m3!1f0!2f39.99999857731487!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1e3!2sNK%20Stockholm!5e0!3m2!1sda!2sdk!4v1623349128809!5m2!1sda!2sdk&z=10"
                width="100%"
                height="450"
                allowFullScreen></iframe>
            </section>

            <div className="pin"></div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Contact
