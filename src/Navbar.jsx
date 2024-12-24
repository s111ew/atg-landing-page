import logo from "./assets/images/icons/icons8-eye-100.png"
import { Link } from "react-router-dom"

function Navbar() {
  return (
  <nav className="nav-container">
    <div className="logo bg"><img src={logo} alt="Eye outline logo" /></div><ul className="navbar bg">
    <li tabIndex={1}><Link to="/" tabIndex={1}>Home</Link></li>
    <li tabIndex={2}><Link to="/docs">Docs</Link></li>
    <li tabIndex={3}><a href="https://github.com/s111ew/alt-text-generator" target="_blank">Code</a></li>
   </ul></nav>
  )
}

export default Navbar