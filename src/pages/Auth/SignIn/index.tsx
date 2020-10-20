import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Field,
  Fieldset,
  ForgetPassword,
  Form,
  Input,
  Options,
  Title,
  FieldCheckBox,
  Register,
} from './styles';

import { api } from '../../../services/api';
import { login, logout } from '../../../services/auth';
import { useAuth } from '../../../context/auth';

import RestrictArea from '../../../components/RestrictArea';
import Button from '../../../components/Button';

const SignIn: React.FC = () => {
  const { setSigned } = useAuth();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  async function handleSignInForm(event: FormEvent) {
    event.preventDefault();

    if (email && password) {
      const response = await api.post('/auth', {
        email,
        password,
      });
      if (response.data.auth) {
        console.log(response.data.expiresIn);
        setInterval(logout(), response.data.expiresIn);
        alert('Login efetuado com sucesso!');
        setSigned(true);
        if (checked) {
          login(response.data.token);
        }
        history.push('/dashboard/orphanages');
      }
    }
  }

  return (
    <RestrictArea>
      <Form onSubmit={handleSignInForm}>
        <Fieldset>
          <Title>Fazer login</Title>
          <Field>
            <label>E-mail</label>
            <Input
              autoComplete="off"
              style={
                email ? { borderColor: '#A1E9C5' } : { borderColor: '#D3E2E5' }
              }
              type="email"
              required
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Field>
          <Field>
            <label>Senha</label>
            <Input
              style={
                password
                  ? { borderColor: '#A1E9C5' }
                  : { borderColor: '#D3E2E5' }
              }
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Field>
        </Fieldset>
        <Options>
          <FieldCheckBox checked={checked}>
            <input type="checkbox" onClick={() => setChecked(!checked)} />
            <label>Lembrar-me</label>
          </FieldCheckBox>
          <ForgetPassword to="/forget_password">
            Esqueci minha senha
          </ForgetPassword>
        </Options>
        <Button name="Entrar" isActive={email && password ? true : false} />
      </Form>
      <Register to="/register" className="register">
        Cadastre-se
      </Register>
    </RestrictArea>
  );
};

export default SignIn;