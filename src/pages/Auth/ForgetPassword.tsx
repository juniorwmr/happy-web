import React, { FormEvent, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { api } from '../../services/api';

import '../../styles/pages/forget-password.css';

const ForgetPassword: React.FC = () => {
  const [email, setEmail] = useState('');

  async function handleSubmitRegister(event: FormEvent) {
    event.preventDefault();

    if (!email) {
      return;
    }

    const response = await api.post('/forget_password', { email });

    if (response.status === 200) {
      alert('Enviamos um e-mail para você para recuperar a senha.');
    }
  }

  return (
    <div id="page-forget-password">
      <Sidebar />
      <main>
        <form
          className="forget-password-form"
          onSubmit={(event) => handleSubmitRegister(event)}
        >
          <fieldset>
            <div className="legend">
              <h1>Recuperar Senha</h1>
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
            <button className="forget-password-button" type="submit">
              Recuperar
            </button>
          </fieldset>
        </form>
      </main>
    </div>
  );
};

export default ForgetPassword;
