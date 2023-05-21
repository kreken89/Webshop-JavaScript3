import React from 'react'
import { signInWithGoogle } from '../../store/features/auth/authSlice'
import { FcGoogle } from 'react-icons/fc'

const GoogleBtn = () => {
  return (
    <>
      <button className="social_login_btn" onClick={signInWithGoogle}>
        <FcGoogle />
      </button>
    </>
  )
}

export default GoogleBtn