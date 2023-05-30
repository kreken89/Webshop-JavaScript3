import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { auth, db, googleProvider } from '../../../firebase/config'
import { collection, addDoc, doc, getDoc } from 'firebase/firestore'

let currentUserData = null

const setUserData = (userData) => {
  currentUserData = userData
}

const getUserData = () => {
  return currentUserData
}

const clearUserData = () => {
  currentUserData = null
}

const signup = async (formData) => {
  const {
    email,
    password,
    firstName,
    lastName,
    address,
    city,
    postal_code,
    phoneNumber,
  } = formData

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )

  const user = {
    uid: userCredential.user.uid,
    email: userCredential.user.email,
    firstName,
    lastName,
    address,
    city,
    postal_code,
    phoneNumber,
  }

  setUserData(user)

  // Store user data in Firestore
  await addDoc(collection(db, 'users'), user)

  return user
}

const login = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)

  const user = {
    uid: userCredential.user.uid,
    email: userCredential.user.email,
  }

  setUserData(user)

  return user
}

const logout = async () => {
  await signOut(auth)
  clearUserData()
}

/* const subscribeToNewsletter = async (email) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email)

  const user = {
    uid: userCredential.user.uid,
    email: userCredential.user.email,
  }

  setUserData(user)

  // Store subscriber data in Firestore
  await addDoc(collection(db, 'subscribers'), user)

  return user
} */

const signInWithGoogle = async () => {
  const userCredential = await signInWithPopup(auth, googleProvider)
  if (!userCredential.user) throw new Error('Google login failed')

  const user = {
    uid: userCredential.user.uid,
    email: userCredential.user.email,
  }

  setUserData(user)

  return user
}

/* const retrieveUserData = async (uid) => {
  const userRef = doc(db, 'users', uid)

  const userDoc = await getDoc(userRef)

  if (userDoc.exists()) {
    const userData = userDoc.data()
    return { uid: userDoc.id, ...userData }
  } else {
    throw new Error('User data not found')
  }
} */


const updateUser = async (uid, updatedData) => {
  const userRef = doc(db, 'users', uid)

  // Retrieve the user document from Firestore
  const userDoc = await getDoc(userRef)

  if (userDoc.exists()) {
    const userData = userDoc.data()

    // Merge the existing user data with the updated data
    const updatedUser = { ...userData, ...updatedData }

    // Update the user document in Firestore
    await setDoc(userRef, updatedUser)

    // Update the user data in the current session
    setUserData(updatedUser)

    return updatedUser
  } else {
    throw new Error('User data not found')
  }
}

const authService = {
  signup,
  login,
  logout,
  //subscribeToNewsletter,
  signInWithGoogle,
  getUserData,
  //retrieveUserData,
  updateUser,
}

export default authService

