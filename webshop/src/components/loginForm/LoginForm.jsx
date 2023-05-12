import React, { Component } from 'react'
import FormsBtn from './FormsBtn'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import { signInWithGoogle } from '../../firebase/utils'
import { auth, provider } from '../../firebase/utils'

class Login extends Component {

  handleSubmit = async (e) => {
  }

  render() {
    return (
      <section className="login-wrap">
        <form onSubmit={this.handleSubmit} className="contact-form">
          <div className="user-details">
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

              />
              <div className="social_login">
                <h3>Login with</h3>
                <FormsBtn
                  onClick={signInWithGoogle}
                  className="social_login_btn">
                  <FaGoogle />
                </FormsBtn>
                <FormsBtn className="social_login_btn_fb">
                  <FaFacebookF />
                </FormsBtn>
              </div>
            </div>
          </div>
          <div className="terms">
            <input type="checkbox" />
            <label htmlFor=""> Please keep me logged in /</label>
            <a href="#">
              {' '}
              Forgot Your Password ?
            </a>
            <br />
            <br />
            <p>
              You don't have account? /
              <a href="/register">
                {' '}
                Register here
              </a>
            </p>
          </div>

          <button className="submit-btn">Login</button>
        </form>
      </section>
    )
  }
}

export default Login
