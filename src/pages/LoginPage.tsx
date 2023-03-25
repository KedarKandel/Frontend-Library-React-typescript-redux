import LoginForm from "../components/loginForm/LoginForm"
import "./pageStyles/loginPage.scss"

type Props = {}

const LoginPage = (props: Props) => {
  return (
    <div className="loginPage">
    <LoginForm/>
    </div>
  )
}

export default LoginPage
