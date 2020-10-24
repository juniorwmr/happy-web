import React, { FormEvent, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import Auth from '../../../components/Auth';
import Button from '../../../components/Button';

import UsersRepository from '../../../repositories/users';
import { Form, Fieldset, Title, Field, Input, EyeContainer } from './styles';

const ResetPassword: React.FC = () => {
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
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmitResetPassword(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    if (password.text === confirmPassword.text) {
      const response = await UsersRepository.ResetPassword(params.token, {
        email,
        new_password: password.text,
      });

      if (response?.status === 202) {
        history.push('/signin');
      }
      setLoading(false);
    }
  }

  useEffect(() => {
    async function verifyTokenProvided() {
      const response = await UsersRepository.VerifyForgetPasswordToken(
        params.token
      );
      if (response?.data.email) {
        setEmail(response?.data.email);
      } else {
        history.push('/');
      }
    }
    verifyTokenProvided();
  }, [history, params.token]);

  return (
    <Auth pushTo="/signin">
      <Form onSubmit={(event) => handleSubmitResetPassword(event)}>
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
          loading={loading}
          name="Enviar"
          isActive={password.text && confirmPassword.text ? true : false}
        />
      </Form>
    </Auth>
  );
};

export default ResetPassword;
