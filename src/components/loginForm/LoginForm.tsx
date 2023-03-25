import "./loginForm.scss"
import { Link } from "react-router-dom"

type Props = {}

const LoginForm = (props: Props) => {
  return (
    <header className="loginForm">
      <h1>Login</h1>
      <form action="">
        <label htmlFor="email">Email</label>
        <input type="email" />
        <label htmlFor="">Password</label>
        <input type="password" />
        <Link to="/bookListPage">
        <button>Login</button>
        </Link>
      </form>
    </header>
  )
}

export default LoginForm