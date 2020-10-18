import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMail, FiKey } from 'react-icons/fi';

import '../../styles/pages/signin.css';

import Sidebar from '../../components/Sidebar';

import { api } from '../../services/api';
import { useAuth } from '../../context/auth';

const SignIn: React.FC = () => {
  const { setSigned } = useAuth();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  async function handleSignInForm(event: FormEvent) {
    event.preventDefault();

    if (email && password) {
      const response = await api.post('/auth', {
        email,
        password,
      });
      if (response.data.auth) {
        alert('Login efetuado com sucesso!');
        setSigned(true);
        if (remember) {
          localStorage.setItem('token', response.data.token);
        }
        history.push('/orphanage/create');
      }
    }
  }

  return (
    <div id="page-sign-in">
      <Sidebar />
      <main>
        <form
          className="sign-in-form"
          onSubmit={(event) => handleSignInForm(event)}
        >
          <fieldset>
            <div className="legend">
              <h1>Acesso Restrito</h1>
            </div>

            <div className="input-block">
              <label htmlFor="email">E-mail</label>
              <FiMail size={20} color="#6e6e6e" className="icon key-icon" />
              <input
                autoFocus
                type="email"
                required
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="password">Senha</label>
              <FiKey size={20} color="#6e6e6e" className="icon key-icon" />
              <input
                type="password"
                minLength={8}
                required
                id="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="input-block-footer">
              <Link to="/forget_password" className="forget_password">
                esqueci minha senha
              </Link>
              <div className="check-box-area">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  defaultChecked={remember}
                  onChange={() => setRemember(!remember)}
                />
                <label htmlFor="remember">Lembrar-me</label>
              </div>
            </div>
            <button className="access-button" type="submit">
              Acessar
            </button>
            <Link to="/register" className="register">
              Cadastre-se
            </Link>
          </fieldset>
        </form>
      </main>
    </div>
  );
};

export default SignIn;
