import React, { FormEvent, useState } from 'react';

import Button from '../../../components/Button';
import RestrictArea from '../../../components/RestrictArea';
import { api } from '../../../services/api';

import { Form, Fieldset, Title, Field, Input } from './styles';

const ForgetPassword: React.FC = () => {
  const [email, setEmail] = useState('');

  async function handleSubmitForgetPassword(event: FormEvent) {
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
    <RestrictArea pushTo="/signin">
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
        <Button name="Enviar" isActive={email ? true : false} />
      </Form>
    </RestrictArea>
  );
};

export default ForgetPassword;
