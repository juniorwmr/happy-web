import React, { FormEvent, useState } from 'react';

import Button from '../../../components/Button';
import Auth from '../../../components/Auth';

import UsersRepository from '../../../repositories/users';
import { Form, Fieldset, Title, Field, Input } from './styles';

const ForgetPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmitForgetPassword(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    const response = await UsersRepository.ForgetPassword(email);

    if (response?.status === 200) {
      alert('Enviamos um e-mail para você para recuperar a senha.');
    }
    setLoading(false);
  }

  return (
    <Auth pushTo="/signin">
      <Form onSubmit={(event) => handleSubmitForgetPassword(event)}>
        <Fieldset>
          <Title>Esqueci minha senha</Title>
          <p>Sua redefinição de senha será enviada para o e-mail cadastrado.</p>
          <Field>
            <label>E-mail</label>
            <Input
              style={
                email ? { borderColor: '#A1E9C5' } : { borderColor: '#D3E2E5' }
              }
              autoComplete="off"
              type="email"
              required
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Field>
        </Fieldset>
        <Button
          loading={loading}
          name="Enviar"
          isActive={email ? true : false}
        />
      </Form>
    </Auth>
  );
};

export default ForgetPassword;
