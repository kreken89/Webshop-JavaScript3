import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase/config'

const signup = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )
  console.log(userCredential)
  const user = {
    id: userCredential.user.uid,
    email: userCredential.user.email,
  }
  return user
}

const subscribeToNewsletter = async (email) => {
  // TODO: Implement this function to subscribe to newsletter and save data in firebase
}

const authService = {
  signup,
  subscribeToNewsletter,
}

export default authService
