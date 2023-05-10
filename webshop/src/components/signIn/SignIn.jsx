const SignIn = () => {
  return (
      <section class="register-wrap">
        <form action="#" class="contact-form">
          <div class="user-details">
            <div class="input-box">
              <label for="fullName">
                Enter Your Name <span className="required">*</span>
              </label>
              <input type="text" id="fullName" class="form-control" required />

              <label for="address">
                Enter Your Address <span className="required">*</span>
              </label>
              <input type="text" id="address" class="form-control" required />

              <label for="postal_code">
                Postal Code <span className="required">*</span>
              </label>
              <input
                type="text"
                id="postal_code"
                class="form-control"
                required
              />

              <label for="phoneNumber">
                Phone Number <span></span>
              </label>
              <input
                type="number"
                id="phoneNumber"
                class="form-control"
                required
              />
            </div>

            <div class="input-box">
              <label for="email">
                Your Email <span className="required">*</span>
              </label>
              <input type="email" id="email" class="form-control" required />

              <label for="password">
                Password <span className="required">*</span>
              </label>
              <input
                type="password"
                id="password"
                class="form-control"
                required
              />

              <label for="password_confirm">
                Confirm Password <span className="required">*</span>
              </label>
              <input
                type="password"
                id="password_confirm"
                class="form-control"
                required
              />
            </div>
          </div>
          <div className="terms">
            <input type="checkbox" />
            <label htmlFor=""> I accept to save my personal details</label>
          </div>

          <button class="submit-btn">Sign In</button>
        </form>
      </section>
  )
}

export default SignIn
