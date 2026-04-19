import HeroBadge from '../components/badges/HeroBadge'
import ContactForm from '../components/ContactForm'
import Location from '../components/Location'

export default function Contacts() {
  return (
    <main>

      <section className="section section--hero section--dark">
        <div className="container">
          <div className="hero__content">
            <HeroBadge label="Apoio ao Candidato" />
            <h1>Entre em <span>Contacto</span></h1>
            <p className="section__subtitle">
              Estamos disponíveis para esclarecer todas as suas dúvidas sobre os nossos
              programas de preparação para concursos públicos. A sua jornada começa com
              a informação certa.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="contacts__grid">

            <ContactForm />

            <div className="contacts__sidebar">
              <Location />

              <div className="location__hours">
                <h3 className="location__hours-title">
                  <i className="fa-regular fa-clock" />
                  Horário de Funcionamento
                </h3>
                <ul className="location__hours-list">
                  <li className="location__hours-item">
                    <span className="location__hours-day">Segunda — Sexta</span>
                    <span className="location__hours-time">09:00 – 20:00</span>
                  </li>
                  <li className="location__hours-item">
                    <span className="location__hours-day">Sábado</span>
                    <span className="location__hours-time">09:00 – 13:00</span>
                  </li>
                  <li className="location__hours-item">
                    <span className="location__hours-day">Domingo e Feriados</span>
                    <span className="location__hours-time location__hours-time--closed">Encerrado</span>
                  </li>
                </ul>
                <p className="location__hours-note">
                  <i className="fa-solid fa-circle-info" />
                  As instalações encontram-se abertas aos alunos inscritos 24h para estudo
                  autónomo, mediante acesso com cartão magnético.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}

