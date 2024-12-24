import './App.css'
import Navbar from './Navbar.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from './HomeLayout.jsx'
import DocsLayout from './DocsLayout.jsx'

function App() {
  return (
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomeLayout />} />
      <Route path='/docs' element={<DocsLayout />} />
    </Routes>
  </Router>
  )
}

export default App