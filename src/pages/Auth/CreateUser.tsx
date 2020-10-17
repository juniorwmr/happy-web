import React from 'react';
import Sidebar from '../../components/Sidebar';

import '../../styles/pages/create-user.css';

const CreateUser: React.FC = () => {
  return (
    <div id="page-create-user">
      <Sidebar />
      <main>
        <form className="create-user-form">
          <fieldset>
            <div className="legend">
              <h1>Cadastrar Usuário</h1>
            </div>
            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" name="name" onChange={() => {}} />
            </div>
            <div className="input-block">
              <label htmlFor="email">E-mail</label>
              <input id="email" name="email" onChange={() => {}} />
            </div>
            <div className="input-block">
              <label htmlFor="password">Senha</label>
              <input id="password" name="password" onChange={() => {}} />
            </div>
            <button className="register-button" type="submit">
              Cadastrar
            </button>
          </fieldset>
        </form>
      </main>
    </div>
  );
};

export default CreateUser;
