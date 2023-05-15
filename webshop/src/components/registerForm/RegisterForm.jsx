const SignIn = () => {
  return (
    <section className="register-wrap">
      <form action="#" className="contact-form">
        <div className="user-details">
          <div className="input-box">
            <label htmlFor="fullName">
              Enter Your Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              className="form-control"
            />
            <label htmlFor="address">
              Enter Your Address <span className="required">*</span>
            </label>
            <input type="text" id="address" className="form-control" />

            <label htmlFor="postal_code">
              Postal Code <span className="required">*</span>
            </label>
            <input
              type="text"
              id="postal_code"
              className="form-control"
            />

            <label htmlFor="phoneNumber">
              Phone Number <span></span>
            </label>
            <input
              type="number"
              id="phoneNumber"
              className="form-control"
            />
          </div>

          <div className="input-box">
            <label htmlFor="email">
              Your Email <span className="required">*</span>
            </label>
            <input type="email" id="email" className="form-control" required />

            <label htmlFor="password">
              Password <span className="required">*</span>
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              required
            />

            <label htmlFor="password_confirm">
              Confirm Password <span className="required">*</span>
            </label>
            <input
              type="password"
              id="password_confirm"
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="terms">
          <input type="checkbox" />
          <label htmlFor=""> I accept to save my personal details</label>
        </div>

        <button className="submit-btn">Sign In</button>
      </form>
    </section>
  )
}

export default SignIn
