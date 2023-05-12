import React from 'react'
import RegisterForm from '../../components/registerForm/RegisterForm'
import SmallHero from '../../components/smallHero/SmallHero'


const register = () => {
  return (
    <div className="register_container">
      <SmallHero page="Register" description="Register now!" />
      <div className="login_container register_form">
        <h2>Register</h2>
        <div className="info_sign_in">
          <span>Please Register Your new Account</span>
        </div>
        <RegisterForm />
      </div>
    </div>
  )
}

export default register