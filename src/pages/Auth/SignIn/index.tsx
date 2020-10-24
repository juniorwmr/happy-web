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

import { login } from '../../../services/auth';
import { useAuth } from '../../../context/auth';

import Auth from '../../../components/Auth';
import Button from '../../../components/Button';

import UsersRepository from '../../../repositories/users';

const SignIn: React.FC = () => {
  const { setSigned } = useAuth();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSignInForm(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    const response = await UsersRepository.Authenticate({ email, password });
    if (response?.data.auth) {
      setSigned(true);
      if (checked) {
        login(response?.data.token);
      }
      history.push('/dashboard/orphanages');
    }
    setLoading(false);
  }

  return (
    <Auth pushTo="/">
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
        <Button
          name="Entrar"
          loading={loading}
          isActive={email && password ? true : false}
        />
      </Form>
      <Register to="/register" className="register">
        Cadastre-se
      </Register>
    </Auth>
  );
};

export default SignIn;
