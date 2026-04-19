import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../services/userStorage';

export default function LogIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Preenche todos os campos.');
      return;
    }

    const result = loginUser(email, password);

    if (!result.success) {
      setError(result.error ?? 'Erro ao iniciar sessão.');
      return;
    }

    navigate('/home');
  }

  return (
    <section className="section section--dark auth-section">
      <div className="container">
        <div className="auth-card">
          <h1 className="auth-card__title">Iniciar Sessão</h1>
          <p className="auth-card__subtitle">Bem-vindo de volta.</p>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>

            <div className="auth-form__field">
              <label htmlFor="email" className="auth-form__label">E-mail</label>
              <input
                id="email"
                type="email"
                className="auth-form__input"
                placeholder="o-teu@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="auth-form__field">
              <label htmlFor="password" className="auth-form__label">Palavra-passe</label>
              <input
                id="password"
                type="password"
                className="auth-form__input"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            {error && <p className="auth-form__error">{error}</p>}

            <button type="submit" className="btn--primary auth-form__submit">
              Entrar
            </button>

          </form>

          <p className="auth-card__footer">
            Ainda não tens conta?{' '}
            <Link to="/registo" className="auth-card__link">Registar</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
