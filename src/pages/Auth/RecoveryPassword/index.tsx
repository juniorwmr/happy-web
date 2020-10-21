import React, { FormEvent, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import RestrictArea from '../../../components/RestrictArea';
import Button from '../../../components/Button';
import { Form, Fieldset, Title, Field, Input, EyeContainer } from './styles';

import { api } from '../../../services/api';

const RecoveryPassword: React.FC = () => {
  const history = useHistory();
  const params = useParams() as { token: string };
  const [password, setPassword] = useState({
    text: '',
    isEyeActive: false,
  });
  const [confirmPassword, setConfirmPassword] = useState({
    text: '',
    isEyeActive: false,
  });
  const [user, setUser] = useState({} as { email: string });

  async function handleSubmitRecoveryPassword(event: FormEvent) {
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
    <RestrictArea pushTo="/signin">
      <Form onSubmit={(event) => handleSubmitRecoveryPassword(event)}>
        <Fieldset>
          <Title>Redefinição de senha</Title>
          <p>Escolha uma nova senha para você acessar o dashboard do Happy.</p>
          <Field>
            <label>Nova senha</label>
            <Input
              style={
                password.text
                  ? { borderColor: '#A1E9C5' }
                  : { borderColor: '#D3E2E5' }
              }
              type={password.isEyeActive ? 'text' : 'password'}
              required
              id="password"
              name="password"
              value={password.text}
              onChange={(event) =>
                setPassword({ ...password, text: event.target.value })
              }
            />
            <EyeContainer
              onClick={() =>
                setPassword({
                  ...password,
                  isEyeActive: password.isEyeActive ? false : true,
                })
              }
            >
              {password.isEyeActive ? (
                <FiEye size={24} color="#15C3D6" />
              ) : (
                <FiEyeOff size={24} color="#8FA7B2" />
              )}
            </EyeContainer>
          </Field>
          <Field>
            <label>Repetir senha</label>
            <Input
              style={
                password.text
                  ? { borderColor: '#A1E9C5' }
                  : { borderColor: '#D3E2E5' }
              }
              type={confirmPassword.isEyeActive ? 'text' : 'password'}
              required
              id="confirm-passowrd"
              name="confirm-passowrd"
              value={confirmPassword.text}
              onChange={(event) =>
                setConfirmPassword({
                  ...confirmPassword,
                  text: event.target.value,
                })
              }
            />
            <EyeContainer
              onClick={() =>
                setConfirmPassword({
                  ...confirmPassword,
                  isEyeActive: confirmPassword.isEyeActive ? false : true,
                })
              }
            >
              {confirmPassword.isEyeActive ? (
                <FiEye size={24} color="#15C3D6" />
              ) : (
                <FiEyeOff size={24} color="#8FA7B2" />
              )}
            </EyeContainer>
          </Field>
        </Fieldset>
        <Button
          name="Enviar"
          isActive={password.text && confirmPassword.text ? true : false}
        />
      </Form>
    </RestrictArea>
  );
};

export default RecoveryPassword;
