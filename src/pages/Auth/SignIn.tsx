import React, { FormEvent, useState } from 'react';

import Sidebar from '../../components/Sidebar';
import { FiMail, FiKey } from 'react-icons/fi';

import '../../styles/pages/signin.css';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignInForm(event: FormEvent) {
    event.preventDefault();

    if (email && password) {
      const response = await api.post('/auth', {
        email,
        password,
      });
      if (response.data.auth) {
        alert('Login efetuado com sucesso!');
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
            <div className="forget_passowrd-area">
              <Link to="/forget_password" className="forget_password">
                esqueci minha senha
              </Link>
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
