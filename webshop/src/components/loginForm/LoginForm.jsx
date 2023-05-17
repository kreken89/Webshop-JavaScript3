// import React, { useState } from 'react'
// import FormsBtn from './FormsBtn'
// import { FaGoogle } from 'react-icons/fa'
// import {
//   db,
//   signInWithGoogle,
//   signInWithEmailAndPassword,
// } from '../../firebase/utils'
// import { doc, query, where, getDoc } from 'firebase/firestore'
// import { initializeApp } from 'firebase/app'
// import { firebaseConfig } from '../../firebase/config'

// // Initialize Firebase
// const app = initializeApp(firebaseConfig)

// const LoginForm = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState(null)

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       const userCredential = await signInWithEmailAndPassword(email, password)
//       const user = userCredential.user
//       // 
//       console.log(userCredential)

//       console.log(email, password)
//       if (user) {
//         const userRef = doc(db, 'users', user.uid)
//         const userData = await getDoc(userRef)
//         // if (userData.exists()) {

//           console.log(userData.data())
          
//           // Retrieve all user data from Firestore
//           const userQuery = query(
//             collection(db, 'userData'), // Replace 'userData' with the collection name where the user data is stored
//             where('userId', '==', user.uid) // Replace 'userId' with the field name that represents the user's ID
//           )
//           const userSnapshot = await getDocs(userQuery)
//           const userDataArray = userSnapshot.docs.map((doc) => doc.data())
//           console.log('User Data Array:', userDataArray)

//           // Use userDataArray for further processing or updating state in the parent component
//         // } 
//       }else {
//           console.log('User data not found')
//         }
//     } catch (error) {
//       const errorCode = error.code
//       const errorMessage = error.message
//       console.log(errorCode, errorMessage)
//       setError(errorMessage)
//     }
//   }

//   const handleChange = (e) => {
//     const { id, value } = e.target
//     if (id === 'email') {
//       setEmail(value)
//     } else if (id === 'password') {
//       setPassword(value)
//     }
//   }

//   return (
//     <section className="login-wrap">
//       <form onSubmit={handleSubmit} className="contact-form">
//         {error && <p className="error">{error}</p>}
//         <div className="user-details">
//           <div className="input-box">
//             <label htmlFor="email">
//               Your Email <span className="required">*</span>
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="form-control"
//               value={email}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="password">
//               Password <span className="required">*</span>
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="form-control"
//               value={password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>
//         <div className="terms">
//           <input type="checkbox" />
//           <label htmlFor=""> Please keep me logged in /</label>
//           <a href="#"> Forgot Your Password ?</a>
//           <br />
//           <br />
//           <p>
//             You don't have an account? / <a href="/register">Register here</a>
//           </p>
//         </div>

//         <button type="submit" className="submit-btn">
//           Login
//         </button>
//         <div className="social_login">
//           <h3>Login with Google</h3>
//           <FormsBtn onClick={signInWithGoogle} className="social_login_btn">
//             <FaGoogle />
//           </FormsBtn>
//         </div>
//       </form>
//     </section>
//   )
// }

// export default LoginForm


import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' // Import the useNavigate hook
import FormsBtn from './FormsBtn'
import { FaGoogle } from 'react-icons/fa'
import {
  db,
  signInWithGoogle,
  signInWithEmailAndPassword,
} from '../../firebase/utils'
import {
  doc,
  query,
  where,
  getDoc,
  collection,
  getDocs,
} from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../../firebase/config'

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate() // Get the navigate function from the useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const userCredential = await signInWithEmailAndPassword(email, password)
      const user = userCredential.user
      console.log(userCredential)
      console.log(email, password)
      if (user) {
        const userRef = doc(db, 'users', user.uid)
        const userData = await getDoc(userRef)
        console.log(userData.data())

        const userQuery = query(
          collection(db, 'userData'), // Replace 'userData' with the collection name where the user data is stored
          where('userId', '==', user.uid) // Replace 'userId' with the field name that represents the user's ID
        )
        const userSnapshot = await getDocs(userQuery)
        const userDataArray = userSnapshot.docs.map((doc) => doc.data())
        console.log('User Data Array:', userDataArray)

        // Redirect to the home page
        navigate('/') // Replace '/' with the path of your home page
      } else {
        console.log('User data not found')
      }
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
      setError(errorMessage)
    }
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    if (id === 'email') {
      setEmail(value)
    } else if (id === 'password') {
      setPassword(value)
    }
  }

  return (
    <section className="login-wrap">
      <form onSubmit={handleSubmit} className="contact-form">
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
              onChange={handleChange}
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
              onChange={handleChange}
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
  )
}

export default LoginForm

