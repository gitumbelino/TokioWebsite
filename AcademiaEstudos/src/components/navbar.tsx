import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './../css/components.css'
import CtaButton from './buttons/CtaButton'
import HamburguerButton from './buttons/HamburguerButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'



export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__logo" onClick={closeMenu}>
          <span>
            <FontAwesomeIcon icon={faBookOpen} />
          </span>
          Academia
        </NavLink>

        <nav className="navbar__nav">
          <ul className="navbar__links">
            <li><NavLink to="/" end>Início</NavLink></li>
            <li><NavLink to="/metodologia">Metodologia</NavLink></li>
            <li><NavLink to="/exames">Exames</NavLink></li>
            <li><NavLink to="/cursos">Cursos</NavLink></li>
            <li><NavLink to="/contacto">Contacto</NavLink></li>
          </ul>
        </nav>

        <CtaButton
          className="navbar__cta"
          onClick={closeMenu}>
          Inscrever
        </CtaButton>

        <HamburguerButton
          isOpen={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)} />
      </div>

      {menuOpen && (
        <div className="navbar__mobile">
          <div className="navbar__mobile-links">
            <NavLink to="/" end onClick={closeMenu}>Início</NavLink>
            <NavLink to="/metodologia" onClick={closeMenu}>Metodologia</NavLink>
            <NavLink to="/exames" onClick={closeMenu}>Exames</NavLink>
            <NavLink to="/cursos" onClick={closeMenu}>Cursos</NavLink>
            <NavLink to="/contacto" onClick={closeMenu}>Contacto</NavLink>
          </div>
          <CtaButton className="navbar__mobile-cta btn--primary" onClick={closeMenu}>
            Inscrever
          </CtaButton>
        </div>
      )}
    </header>
  )
}