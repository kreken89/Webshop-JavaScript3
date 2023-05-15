import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/utils'
import { useState } from 'react'

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault()

    if (password !== passwordConfirm) {
      alert('Passwords do not match')
      return
    }

    try{
      const { user } = await createUserWithEmailAndPassword(auth, email, password)

      const userData = {
        firstName,
        lastName,
        address,
        postalCode,
        phoneNumber,
      }

      // Save userData to Firebase database or Firestore
      console.log(userData);

      // Optionally, you can redirect the user to another page
      // after successful registration
      // history.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className="register-wrap">
      <form onSubmit={handleRegister} className="contact-form">
        <label htmlFor="firstName">
          Enter Your First Name <span className="required">*</span>
        </label>
        <input
          type="text"
          id="firstName"
          className="form-control"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </form>
    </section>
  )
}

export default RegisterForm


// const SignIn = () => {
//   return (
//     <section className="register-wrap">
//       <form action="#" className="contact-form">
//         <div className="user-details">
//           <div className="input-box">
//             <label htmlFor="fullName">
//               Enter Your Name <span className="required">*</span>
//             </label>
//             <input
//               type="text"
//               id="fullName"
//               className="form-control"
//             />
//             <label htmlFor="address">
//               Enter Your Address <span className="required">*</span>
//             </label>
//             <input type="text" id="address" className="form-control" />

//             <label htmlFor="postal_code">
//               Postal Code <span className="required">*</span>
//             </label>
//             <input
//               type="text"
//               id="postal_code"
//               className="form-control"
//             />

//             <label htmlFor="phoneNumber">
//               Phone Number <span></span>
//             </label>
//             <input
//               type="number"
//               id="phoneNumber"
//               className="form-control"
//             />
//           </div>

//           <div className="input-box">
//             <label htmlFor="email">
//               Your Email <span className="required">*</span>
//             </label>
//             <input type="email" id="email" className="form-control" required />

//             <label htmlFor="password">
//               Password <span className="required">*</span>
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="form-control"
//               required
//             />

//             <label htmlFor="password_confirm">
//               Confirm Password <span className="required">*</span>
//             </label>
//             <input
//               type="password"
//               id="password_confirm"
//               className="form-control"
//               required
//             />
//           </div>
//         </div>
//         <div className="terms">
//           <input type="checkbox" />
//           <label htmlFor=""> I accept to save my personal details</label>
//         </div>

//         <button className="submit-btn">Sign In</button>
//       </form>
//     </section>
//   )
// }

// export default SignIn
