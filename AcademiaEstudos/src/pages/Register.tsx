import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../services/userStorage';

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      setError('Preenche todos os campos.');
      return;
    }

    if (password !== confirmPassword) {
      setError('As palavras-passe não coincidem.');
      return;
    }

    if (password.length < 6) {
      setError('A palavra-passe deve ter pelo menos 6 caracteres.');
      return;
    }

    const result = registerUser(name, email, password);

    if (!result.success) {
      setError(result.error ?? 'Erro ao criar conta.');
      return;
    }

    navigate('/login');
  }

  return (
    <section className="section section--dark auth-section">
      <div className="container">
        <div className="auth-card">
          <h1 className="auth-card__title">Criar Conta</h1>
          <p className="auth-card__subtitle">Preenche os dados para iniciar o teu percurso.</p>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>

            <div className="auth-form__field">
              <label htmlFor="name" className="auth-form__label">Nome Completo</label>
              <input
                id="name"
                type="text"
                className="auth-form__input"
                placeholder="O teu nome completo"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div className="auth-form__field">
              <label htmlFor="email" className="auth-form__label">Endereço de E-mail</label>
              <input
                id="email"
                type="email"
                className="auth-form__input"
                placeholder="nome@exemplo.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="auth-form__row">
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

              <div className="auth-form__field">
                <label htmlFor="confirmPassword" className="auth-form__label">Confirmar</label>
                <input
                  id="confirmPassword"
                  type="password"
                  className="auth-form__input"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            {error && <p className="auth-form__error">{error}</p>}

            <button type="submit" className="btn--primary auth-form__submit">
              Criar Conta
            </button>

          </form>

          <p className="auth-card__footer">
            Já tens conta?{' '}
            <Link to="/login" className="auth-card__link">Iniciar sessão</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
