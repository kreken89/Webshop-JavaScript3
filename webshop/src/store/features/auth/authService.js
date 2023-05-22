import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signInWithPopup, signOut
} from 'firebase/auth'
import { auth, googleProvider } from '../../../firebase/config'

const signup = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )

  const user = {
    uid: userCredential.user.uid,
    email: userCredential.user.email,
  }
  return user
}

const login = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)

  const user = {
    uid: userCredential.user.uid,
    email: userCredential.user.email,
  }
  return user
}

const logout = async () => {
  return await signOut(auth)
}

// login as admin
const loginAsAdmin = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)

  const admin = {
    uid: userCredential.user.uid,
    email: userCredential.user.email,
  }
  return admin
}

// signup as admin
const signupAsAdmin = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )

  const admin = {
    uid: userCredential.user.uid,
    email: userCredential.user.email,
  }
  return admin
}

// TODO: Implement this function to subscribe to newsletter and save data in firebase
const subscribeToNewsletter = async (email) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email)

  const user = {
    uid: userCredential.user.uid,
    email: userCredential.user.email,
  }
  return user
}

const signInWithGoogle = async () => {
  const userCredential = await signInWithPopup(auth, googleProvider)
  if(!userCredential.user) throw new Error('Google login failed')


  const user = {
    uid: userCredential.user.uid,
    email: userCredential.user.email,
  }
  return user
}

const authService = {
  signup,
  login,
  logout,
  signupAsAdmin,
  loginAsAdmin,
  subscribeToNewsletter,
  signInWithGoogle,
}

export default authService