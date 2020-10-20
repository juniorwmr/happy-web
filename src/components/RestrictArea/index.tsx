import React from 'react';

import {
  Container,
  SideBar,
  LogoImg,
  Location,
  Main,
  MainContainer,
  Button,
} from './styles';

import logo from '../../images/Logotipo.svg';

import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

const RestrictArea: React.FC = ({ children }) => {
  const { goBack } = useHistory();
  return (
    <Container>
      <SideBar>
        <LogoImg src={logo} />
        <Location>
          <h1>Acre</h1>
          <h2>Rio Branco</h2>
        </Location>
      </SideBar>
      <Main>
        <Button backgroundColor="#EBF2F5" onClick={goBack}>
          <FiArrowLeft size={24} color="#15C3D6" />
        </Button>
        <MainContainer>{children}</MainContainer>
      </Main>
    </Container>
  );
};

export default RestrictArea;
