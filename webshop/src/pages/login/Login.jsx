import LoginForm from "../../components/loginForm/LoginForm"

const Login = ( props ) => {
  return (
    <div className="login_sign_container">
      <div className="login_container">
        <h2>Login</h2>
        <div className="info_login">
          <span>Please Login to Your Account</span>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login