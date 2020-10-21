import styled from 'styled-components';
import ButtonIcon from '../ButtonIcon';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 40vw 20vw;
  grid-template-rows: 1fr;
  grid-template-areas: 'sidebar sidebar main';
`;

export const SideBar = styled.div`
  background: linear-gradient(329.54deg, #2986d1 0%, #00c7c7 100%);

  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  align-items: center;

  grid-area: sidebar;
`;

export const LogoImg = styled.img``;

export const Location = styled.div`
  display: flex;
  flex-direction: column;

  line-height: 34px;

  justify-content: center;
  align-items: center;
`;

export const Main = styled.main`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  grid-area: main;
`;

export const MainContainer = styled.div`
  width: 30vw;
  height: 80vh;
  margin-top: 64px;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const Button = styled(ButtonIcon)`
  position: absolute;
  top: 40px;
  right: 40px;
`;
