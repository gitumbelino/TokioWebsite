import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './../css/components.css'
import NavbarButton from './buttons/navbarButton'
import HamburguerButton from './buttons/HamburguerButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'



export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="navbar__inner">

        <NavLink to="/home" className="navbar__logo" onClick={closeMenu}>
          <span>
            <FontAwesomeIcon icon={faBookOpen} />
          </span>
          Academia
        </NavLink>

        <nav className="navbar__nav">
          <ul className="navbar__links">
            <li><NavLink to="/home">Início</NavLink></li>
            <li><NavLink to="/metodologia">Metodologia</NavLink></li>
            <li><NavLink to="/exames">Exames</NavLink></li>
            <li><NavLink to="/cursos">Cursos</NavLink></li>
            <li><NavLink to="/contacto">Contacto</NavLink></li>
          </ul>
        </nav>

        <NavLink to="/login" className="btn--primary navbar__cta" onClick={closeMenu}>
          Log in / Sign Up
        </NavLink>

        <HamburguerButton
          isOpen={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)} />
      </div>

      {menuOpen && (
        <div className="navbar__mobile">
          <div className="navbar__mobile-links">
            <NavLink to="/home" onClick={closeMenu}>Início</NavLink>
            <NavLink to="/metodologia" onClick={closeMenu}>Metodologia</NavLink>
            <NavLink to="/exames" onClick={closeMenu}>Exames</NavLink>
            <NavLink to="/cursos" onClick={closeMenu}>Cursos</NavLink>
            <NavLink to="/contacto" onClick={closeMenu}>Contacto</NavLink>
          </div>
          <NavbarButton
            children="Log in / Sign Up"
            className="navbar__mobile-cta btn--primary" onClick={closeMenu}>
          </NavbarButton>
        </div>
      )}
    </header>
  )
}