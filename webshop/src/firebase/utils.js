// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app'
// import { getFirestore } from 'firebase/firestore'
// import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
// import { firebaseConfig } from './config'

// // export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider)

// // Initialize Firebase
// const app = initializeApp(firebaseConfig)

// export const db = getFirestore(app)
// export const auth = getAuth(app)
// export const provider = new GoogleAuthProvider()

// export const signInWithGoogle = async () => {
//   try {
//     const result = await signInWithPopup(auth, provider)
//     const user = result.user
//     console.log(user)
//   } catch (error) {
//     console.log(error)
//   }
// }

// import { initializeApp } from 'firebase/app'
// import { getFirestore } from 'firebase/firestore'
// import {
//   getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
// } from 'firebase/auth'
// import { firebaseConfig } from './config'

// // Initialize Firebase
// const app = initializeApp(firebaseConfig)

// export const db = getFirestore(app)
// export const auth = getAuth(app)
// export const provider = new GoogleAuthProvider()

// export const signInWithGoogle = async () => {
//   try {
//     const result = await signInWithPopup(auth, provider)
//     const user = result.user
//     console.log(user)
//   } catch (error) {
//     console.log(error)
//   }
// }

// export const registerWithEmailAndPassword = async (email, password) => {
//   try {
//     const { user } = await createUserWithEmailAndPassword(auth, email, password)
//     return user
//   } catch (error) {
//     console.log(error)
//     throw error
//   }
// }

import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { firebaseConfig } from './config'

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    console.log(user)
  } catch (error) {
    console.log(error)
  }
}

export const registerWithEmailAndPassword = async (
  email,
  password,
  userData
) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)

    // Create a new document in the "users" collection with the user's additional data
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      email: user.email,
      ...userData,
    })

    return user
  } catch (error) {
    console.log(error)
    throw error
  }
}
