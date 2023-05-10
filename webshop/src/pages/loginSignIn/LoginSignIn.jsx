import Login from "../../components/login/Login"
import SignIn from "../../components/signIn/SignIn"

const LoginSignIn = () => {
  return (
    <div className="login_sign_container">
      <div className="login_container">
        <h2>Sign In</h2>
        <div className="info_sign_in">
          <span>Please Register Your new Account</span>
        </div>
        <SignIn />
      </div>
      <div className="login_container">
        <h2>Login</h2>
        <div className="info_login">
          <span>Please Login to Your Account</span>
        </div>
        <Login />
      </div>
    </div>
  )
}

export default LoginSignIn