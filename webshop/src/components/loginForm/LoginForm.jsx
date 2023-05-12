import React from 'react'

const Login = (props) => {
  return (
    <section class="login-wrap">
      <form class="contact-form">
        <div class="user-details">
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
          </div>
        </div>

        <div className="terms">
          <input type="checkbox" />
          <label htmlFor=""> Please keep me logged in /</label>
          <a href="#" className="required">
            {' '}
            Forgot Your Password ?
          </a>
          <br />
          <br />
          <p>
            You don't have account? /
            <a href="/register" className="required">
              {' '}
              Register here
            </a>
          </p>
        </div>

        <button class="submit-btn">Login</button>
      </form>
    </section>
  )
}

export default Login
