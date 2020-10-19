import React, { FormEvent, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import { api } from '../../services/api';

import '../../styles/pages/forget-password.css';

interface IParams {
  token: string;
}

interface IUser {
  email: string;
}

const RecoveryPassword: React.FC = () => {
  const history = useHistory();
  const params = useParams() as IParams;
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<IUser>({} as IUser);

  async function handleSubmitRegister(event: FormEvent) {
    event.preventDefault();

    const response = await api.post(`/forget_password/${params.token}`, {
      email: user.email,
      password,
    });

    if (response.status === 202) {
      alert('Senha alterada com sucesso!');
      history.push('/signin');
    }
  }

  useEffect(() => {
    async function verifyTokenProvided() {
      try {
        const response = await api.get(
          `/forget_password/verify/${params.token}`
        );
        if (response.status === 200) {
          setUser(response.data);
        }
      } catch (err) {
        if (err.request.response) {
          history.push('/');
        }
      }
    }
    verifyTokenProvided();
  }, [history, params.token]);

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
              <h1>Alterar Senha</h1>
            </div>
            <div className="input-block">
              <label htmlFor="email">Nova Senha</label>
              <input
                type="password"
                required
                id="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button className="forget-password-button" type="submit">
              Alterar
            </button>
          </fieldset>
        </form>
      </main>
    </div>
  );
};

export default RecoveryPassword;
