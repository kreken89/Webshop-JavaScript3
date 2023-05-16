// import React, { Component } from 'react'
// import { signInWithEmailAndPassword } from 'firebase/auth'
// import FormsBtn from './FormsBtn'
// import { FaGoogle } from 'react-icons/fa'
// import { signInWithGoogle, auth } from '../../firebase/utils'

// class LoginForm extends Component {
//   state = {
//     email: '',
//     password: '',
//     error: null,
//   }

//   handleSubmit = async (e) => {
//     e.preventDefault()
    
//     const history = useHistory()
//     const { email, password } = this.state
//     try {
//       await signInWithEmailAndPassword(auth, email, password)
//       history.push('/')
//     } catch (error) {
//       this.setState({ error: error.message })
//     }
//   }

//   handleChange = (e) => {
//     const { id, value } = e.target
//     this.setState({ [id]: value })
//   }

//   render() {
//     const { email, password, error } = this.state
//     return (
//       <section className="login-wrap">
//         <form onSubmit={this.handleSubmit} className="contact-form">
//           {error && <p className="error">{error}</p>}
//           <div className="user-details">
//             <div className="input-box">
//               <label htmlFor="email">
//                 Your Email <span className="required">*</span>
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="form-control"
//                 value={email}
//                 onChange={this.handleChange}
//                 required
//               />

//               <label htmlFor="password">
//                 Password <span className="required">*</span>
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="form-control"
//                 value={password}
//                 onChange={this.handleChange}
//                 required
//               />
//             </div>
//           </div>
//           <div className="terms">
//             <input type="checkbox" />
//             <label htmlFor=""> Please keep me logged in /</label>
//             <a href="#"> Forgot Your Password ?</a>
//             <br />
//             <br />
//             <p>
//               You don't have account? / <a href="/register"> Register here</a>
//             </p>
//           </div>

//           <button type='submit' className="submit-btn">
//             Login
//           </button>
//           <div className="social_login">
//             <h3>Login with Google</h3>
//             <FormsBtn onClick={signInWithGoogle} className="social_login_btn">
//               <FaGoogle />
//             </FormsBtn>
//           </div>
//         </form>
//       </section>
//     )
//   }
// }
// export default LoginForm

import React, { Component } from 'react';
import FormsBtn from './FormsBtn';
import { FaGoogle } from 'react-icons/fa';
import { signInWithGoogle, signInWithEmailAndPassword } from '../../firebase/utils';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: null
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await signInWithEmailAndPassword(email, password);
      const user = auth.currentUser;
      if (user) {
        const userRef = firestore.collection('users').doc(user.uid);
        const userData = await userRef.get();
        if (userData.exists()) {
          const userDataObj = userData.data();
          // Use the userDataObj for further processing or updating state
          console.log(userDataObj);
        } else {
          // User data does not exist
          console.log('User data not found');
        }
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // Handle the error message and display it to the user
      this.setState({ error: errorMessage });
    }
  };

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  render() {
    const { email, password, error } = this.state;
    return (
      <section className="login-wrap">
        <form onSubmit={this.handleSubmit} className="contact-form">
          {error && <p className="error">{error}</p>}
          <div className="user-details">
            <div className="input-box">
              <label htmlFor="email">
                Your Email <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={this.handleChange}
                required
              />

              <label htmlFor="password">
                Password <span className="required">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="terms">
            <input type="checkbox" />
            <label htmlFor=""> Please keep me logged in /</label>
            <a href="#"> Forgot Your Password ?</a>
            <br />
            <br />
            <p>
              You don't have an account? / <a href="/register">Register here</a>
            </p>
          </div>

          <button type="submit" className="submit-btn">
            Login
          </button>
          <div className="social_login">
            <h3>Login with Google</h3>
            <FormsBtn onClick={signInWithGoogle} className="social_login_btn">
              <FaGoogle />
            </FormsBtn>
          </div>
        </form>
      </section>
    );
  }
}

export default LoginForm;

