// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { firebaseConfig } from './config'

// import { firebaseConfig } from './config'

// firebase.initializeApp(firebaseConfig)

// export const auth = firebase.auth()
// export const firestore = firebase.firestore()

// // Google authentication
// const GoogleProvider = new firebase.auth.GoogleAuthProvider()

// GoogleProvider.setCustomParameters({ prompt: 'select_account' })
// // Google sign in
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider)

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()