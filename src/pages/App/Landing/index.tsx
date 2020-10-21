import React from 'react';
import { FiArrowRight, FiLogIn } from 'react-icons/fi';

import {
  Wrapper,
  Content,
  Header,
  Location,
  LogInButton,
  LogInButtonIcon,
  EnterButton,
  Main,
} from './styles';
import logoImg from '../../../images/logo.svg';

const Landing: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <Header>
          <img src={logoImg} alt="Happy Logo" />
          <Location>
            <strong>Acre</strong>
            <span>Rio Branco</span>
          </Location>
          <LogInButtonIcon to="/signin" className="btn-icon">
            <FiLogIn size={30} color="#fff" />
          </LogInButtonIcon>
          <LogInButton to="/signin" className="btn-signin">
            Acesso restrito
          </LogInButton>
        </Header>

        <Main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </Main>

        <EnterButton to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </EnterButton>
      </Content>
    </Wrapper>
  );
};

export default Landing;
