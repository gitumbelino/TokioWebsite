import { NavLink } from 'react-router-dom'
import SocialLinks from './SocialLinks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
  return (
    <footer className="footer section--dark">
      <div className="container">

        <div className="footer__grid">

          {/* ------------ACADEMIA ---------- */}
          <div className="footer__brand">
            <div className='footer__brand-logo'>
              <span>
                <FontAwesomeIcon icon={faBookOpen} />
              </span>
              Academia
            </div>
            <p className="footer__tagline">
              Preparação rigorosa para concursos públicos.
            </p>
            <div className="footer__socials">
              <SocialLinks variant="instagram" />
              <SocialLinks variant="facebook" />
              <SocialLinks variant="youtube" />
              <SocialLinks variant="linkedin" />
            </div>
          </div>

          {/* ------------SECCAO LINKS ---------- */}
          <div> 
            <h4 className="footer__col-title">Navegação</h4>
            <ul className="footer__links">
              <li><NavLink to="/home">Início</NavLink></li>
              <li><NavLink to="/metodologia">Metodologia</NavLink></li>
              <li><NavLink to="/exames">Exames Anteriores</NavLink></li>
              <li><NavLink to="/cursos">Cursos Disponíveis</NavLink></li>
              <li><NavLink to="/contacto">Corpo Docente</NavLink></li>
            </ul>
          </div>

          {/* ------------CONTACTOS ---------- */}
          <div>
            <h4 className="footer__col-title">Contacto</h4>
            <ul className="footer__links ">
              <li className="footer__contact-item">
                <i className="fa-solid fa-location-dot"></i>
                <span>Av. das Forças Armadas, 12<br />1600-081 Lisboa, Portugal</span>
              </li>
              <li className="footer__contact-item">
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:info@academiadeestudos.pt">info@academiadeestudos.pt</a>
              </li>
              <li className="footer__contact-item">
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+351210000000">+351 210 000 000</a>
              </li>
            </ul>
          </div>

        </div>

        {/* ------------ RODAPE ---------- */}
        <div className="footer__bottom">
          <p className="footer__copy">&copy; 2024 Academia | Todos os direitos reservados.</p>
          <div className="footer__legal">
            <a href="#">Política de Privacidade |</a><a href="#">  Termos de Serviço</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
