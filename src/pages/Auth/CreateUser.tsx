import React, { FormEvent, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { api } from '../../services/api';

import '../../styles/pages/create-user.css';

const CreateUser: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmitRegister(event: FormEvent) {
    event.preventDefault();

    const data = {
      name,
      email,
      password,
    };

    const response = await api.post('/users', data);
    if (response.status === 200) {
      alert('Cadastro efetuado com sucesso!');
    }
  }

  return (
    <div id="page-create-user">
      <Sidebar />
      <main>
        <form
          className="create-user-form"
          onSubmit={(event) => handleSubmitRegister(event)}
        >
          <fieldset>
            <div className="legend">
              <h1>Cadastrar Usuário</h1>
            </div>
            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                autoFocus
                required
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="email">E-mail</label>
              <input
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
