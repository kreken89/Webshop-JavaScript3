import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { auth, db, googleProvider } from '../../../firebase/config'
import { collection, addDoc, doc, getDoc } from 'firebase/firestore'

export const getUserData = async (uid) => {
  try {
    const userRef = doc(db, 'users', uid)
    const userDoc = await getDoc(userRef)

    if (userDoc.exists()) {
      const userData = userDoc.data()
      return userData
    } else {
      throw new Error('User data not found')
    }
  } catch (error) {
    throw new Error('Failed to fetch user data')
  }
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

  const userData = await getUserData(user.uid)

  setUserData({ ...user, ...userData })

  return user
}

const logout = async () => {
  await signOut(auth)
  clearUserData()
}

const subscribeToNewsletter = async (email) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email)

  const user = {
    uid: userCredential.user.uid,
    email: userCredential.user.email,
  }

  setUserData(user)

  // Store subscriber data in Firestore
  await addDoc(collection(db, 'subscribers'), user)

  return user
}

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

const authService = {
  signup,
  login,
  logout,
  subscribeToNewsletter,
  signInWithGoogle,
  getUserData,
}

export default authService

// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
// } from 'firebase/auth'
// import { auth, db, googleProvider } from '../../../firebase/config'
// import { collection, addDoc, doc, getDoc } from 'firebase/firestore'

// let currentUserData = null

// const setUserData = (userData) => {
//   currentUserData = userData
// }

// const getUserData = () => {
//   return currentUserData
// }

// const clearUserData = () => {
//   currentUserData = null
// }

// const signup = async (formData) => {
//   const {
//     email,
//     password,
//     firstName,
//     lastName,
//     address,
//     city,
//     postal_code,
//     phoneNumber,
//   } = formData

//   const userCredential = await createUserWithEmailAndPassword(
//     auth,
//     email,
//     password
//   )

//   const user = {
//     uid: userCredential.user.uid,
//     email: userCredential.user.email,
//     firstName,
//     lastName,
//     address,
//     city,
//     postal_code,
//     phoneNumber,
//   }

//   setUserData(user)

//   // Store user data in Firestore
//   await addDoc(collection(db, 'users'), user)

//   return user
// }

// const login = async (email, password) => {
//   const userCredential = await signInWithEmailAndPassword(auth, email, password)

//   const user = {
//     uid: userCredential.user.uid,
//     email: userCredential.user.email,
//   }

//   const userData = await retrieveUserData(user.uid)

//   setUserData({...user, ...userData})

//   return user
// }

// const logout = async () => {
//   await signOut(auth)
//   clearUserData()
// }

// const subscribeToNewsletter = async (email) => {
//   const userCredential = await createUserWithEmailAndPassword(auth, email)

//   const user = {
//     uid: userCredential.user.uid,
//     email: userCredential.user.email,
//   }

//   setUserData(user)

//   // Store subscriber data in Firestore
//   await addDoc(collection(db, 'subscribers'), user)

//   return user
// }

// const signInWithGoogle = async () => {
//   const userCredential = await signInWithPopup(auth, googleProvider)
//   if (!userCredential.user) throw new Error('Google login failed')

//   const user = {
//     uid: userCredential.user.uid,
//     email: userCredential.user.email,
//   }

//   setUserData(user)

//   return user
// }

// const retrieveUserData = async (uid) => {
//   const userRef = doc(db, 'users', uid)

//   const userDoc = await getDoc(userRef)

//   if (userDoc.exists()) {
//     const userData = userDoc.data()
//     return userData
//   } else {
//     throw new Error('User data not found')
//   }
// }

// const authService = {
//   signup,
//   login,
//   logout,
//   subscribeToNewsletter,
//   signInWithGoogle,
//   getUserData,
//   retrieveUserData,
// }

// export default authService
