import { useState, useEffect } from "react"
import "./navbar.css"

export default function Navbar(){

  const [showNav, setShowNav] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {

        const timer = setTimeout(() => {
      setShowNav(true)
    }, 2500) // 2.5 segundos

    return () => clearTimeout(timer)

  }, [])

  return (

    <nav className={`navbar ${showNav ? "navbar_visible" : ""}`}>

      <div className="navbar_container">

        <div className="logo">
          Gabriel
        </div>

        <ul className={`nav_links ${menuOpen ? "active" : ""}`}>
          {menuOpen && (
          <button
          className="menu_close"
          onClick={() => setMenuOpen(false)}
          >
            X
          </button>

          )}
          

          <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#intro" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>

        </ul>

        <div 
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >

          <span></span>
          <span></span>
          <span></span>

        </div>

      </div>

    </nav>
  )
}