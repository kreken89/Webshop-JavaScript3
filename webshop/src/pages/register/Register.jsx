import React from 'react'
import RegisterForm from '../../components/registerForm/RegisterForm'


const register = () => {
  return (
    <div className="register_container">
        <div className="register_place">
        <h2>Register</h2>
        <div className="register_info">
          <span>Please Register Your new Account</span>
        </div>
        <RegisterForm />
        </div>
      </div>
  )
}

export default register