import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase/config'

const signup = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )

  const user = {
    id: userCredential.user.uid,
    email: userCredential.user.email,
  }
  return user
}

const login = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)

  const user = {
    id: userCredential.user.uid,
    email: userCredential.user.email,
  }
  return user
}

// TODO: Implement this function to subscribe to newsletter and save data in firebase
const subscribeToNewsletter = async (email) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email)

  const user = {
    id: userCredential.user.uid,
    email: userCredential.user.email,
  }
  return user
}

const authService = {
  signup,
  login,
  subscribeToNewsletter,
}

export default authService
