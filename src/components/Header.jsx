import './Header.css'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
    </header>
  )
}

export default Header