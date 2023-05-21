import React from 'react'
import LoginAdmin from './loginAdmin/LoginAdmin'
import RegisterAdmin from './registerAdmin/RegisterAdmin'

const Admin = () => {
  return (
    <div className="login_sign_container">
      <div className="login_container">
        <h2>Administrator Login page</h2>
        <div className="info_login"></div>
        <LoginAdmin />
        <RegisterAdmin />
      </div>
    </div>
  )
}

export default Admin
