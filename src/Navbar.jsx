import logo from "./assets/images/icons/icons8-eye-100.png"
import { Link } from "react-router-dom"

function Navbar() {
  return (
  <nav className="nav-container">
    <div className="logo bg"><img src={logo} alt="Eye outline logo" /></div><ul className="navbar bg">
    <li><Link tabIndex={1} to="/">Home</Link></li>
    <li><Link  tabIndex={2} to="/docs">Docs</Link></li>
    <li><a tabIndex={3} href="https://github.com/s111ew/alt-text-generator" target="_blank">Code</a></li>
   </ul></nav>
  )
}

export default Navbar