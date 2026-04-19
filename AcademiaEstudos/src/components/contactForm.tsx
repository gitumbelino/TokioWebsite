export default function ContactForm() {
  return (
    <div className="contact-form__card">
      <h2 className="contact-form__title">Envie-nos uma Mensagem</h2>
      <p className="contact-form__desc">
        Preencha o formulário abaixo e entraremos em contacto consigo o mais brevemente
        possível. Os campos marcados com * são de preenchimento obrigatório.
      </p>

      <form action="#" method="POST" className="contact-form">

        <div className="contact-form__row">
          <div className="contact-form__field">
            <label htmlFor="nome" className="contact-form__label">Nome Completo *</label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              placeholder="O seu nome completo"
              className="contact-form__input"
            />
          </div>

          <div className="contact-form__field">
            <label htmlFor="telefone" className="contact-form__label">Telefone</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="O seu número de telefone"
              className="contact-form__input"
            />
          </div>
        </div>

        <div className="contact-form__field">
          <label htmlFor="email" className="contact-form__label">Endereço de Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="O seu endereço de email"
            className="contact-form__input"
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="assunto" className="contact-form__label">Assunto</label>
          <div className="contact-form__select-wrapper">
            <select id="assunto" name="assunto" className="contact-form__input contact-form__select">
              <option value="" disabled>Selecione um assunto</option>
              <option value="informacoes">Informações sobre Cursos</option>
              <option value="inscricoes">Inscrições</option>
              <option value="duvidas">Dúvidas Gerais</option>
              <option value="outros">Outros</option>
            </select>
            <i className="fa-solid fa-chevron-down contact-form__select-icon"></i>
          </div>
        </div>

        <div className="contact-form__field">
          <label htmlFor="mensagem" className="contact-form__label">Mensagem *</label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={5}
            required
            placeholder="Como podemos ajudar?"
            className="contact-form__input contact-form__textarea"
          />
        </div>

        <button type="submit" className="contact-form__submit btn--cta-filled">
          Enviar Mensagem
          <i className="fa-solid fa-paper-plane"></i>
        </button>

      </form>
    </div>
  )
}
