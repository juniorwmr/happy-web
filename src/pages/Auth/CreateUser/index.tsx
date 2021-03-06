import React, { FormEvent, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import { Form, Fieldset, Title, Field, Input, EyeContainer } from './styles';
import Auth from '../../../components/Auth';
import Button from '../../../components/Button';

import UsersRepository from '../../../repositories/users';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const CreateUser: React.FC = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEyeActive, setIsEyeActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const notify = () => toast.error('Não foi possível criar o usuário!');

  async function handleSubmitRegisterUser(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    const response = await UsersRepository.create({ name, email, password });
    if (response?.status === 201) {
      history.push('/signin');
    } else {
      notify();
    }
    setLoading(false);
  }

  return (
    <Auth pushTo="/signin">
      <ToastContainer style={{ fontSize: 15, fontFamily: 'sans-serif' }} />
      <Form onSubmit={(event) => handleSubmitRegisterUser(event)}>
        <Fieldset>
          <Title>Cadastrar usuário</Title>
          <Field>
            <label>Nome</label>
            <Input
              style={
                name ? { borderColor: '#A1E9C5' } : { borderColor: '#D3E2E5' }
              }
              autoComplete="off"
              type="name"
              required
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Field>
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
          <Field>
            <label>Senha</label>
            <Input
              style={
                password
                  ? { borderColor: '#A1E9C5' }
                  : { borderColor: '#D3E2E5' }
              }
              type={isEyeActive ? 'text' : 'password'}
              required
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <EyeContainer onClick={() => setIsEyeActive(!isEyeActive)}>
              {isEyeActive ? (
                <FiEye size={24} color="#15C3D6" />
              ) : (
                <FiEyeOff size={24} color="#8FA7B2" />
              )}
            </EyeContainer>
          </Field>
        </Fieldset>
        <Button
          name="Enviar"
          loading={loading}
          isActive={name && email && password ? true : false}
        />
      </Form>
    </Auth>
  );
};

export default CreateUser;
