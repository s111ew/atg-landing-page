import logo from "./assets/images/icons/icons8-eye-100.png"

function Navbar() {
  return (
  <nav className="nav-container">
    <div className="logo bg"><img src={logo} alt="Eye outline logo" /></div><ul className="navbar bg">
    <li tabIndex={1}>Home</li>
    <li tabIndex={2}>Docs</li>
    <a tabIndex={3} href="https://github.com/s111ew/alt-text-generator" target="_blank"><li>Code</li></a>
   </ul></nav>
  )
}

export default Navbar