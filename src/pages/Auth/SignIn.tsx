import React from 'react';

import Sidebar from '../../components/Sidebar';
import { FiUser, FiKey } from 'react-icons/fi';

import '../../styles/pages/signin.css';
import { Link } from 'react-router-dom';

const SignIn: React.FC = () => {
  return (
    <div id="page-sign-in">
      <Sidebar />
      <main>
        <form className="sign-in-form">
          <fieldset>
            <div className="legend">
              <h1>Acesso Restrito</h1>
            </div>

            <div className="input-block">
              <label htmlFor="name">E-mail</label>
              <FiUser size={20} color="#6e6e6e" className="icon key-icon" />
              <input id="email" name="email" onChange={() => {}} />
            </div>
            <div className="input-block">
              <label htmlFor="name">Senha</label>
              <FiKey size={20} color="#6e6e6e" className="icon key-icon" />
              <input id="password" name="password" onChange={() => {}} />
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
