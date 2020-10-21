import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #2986d1 0%, #00c7c7 100%);

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    padding: 10px;
    align-items: baseline;
  }
`;
export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${require('../../../images/landing.svg')}) no-repeat 80%
    center;
  background-size: 40%;
  background-position-x: 90%;

  @media (max-width: 700px) {
    max-height: 650px;

    background-size: 50%;
    background-position-y: 20%;
  }
`;
export const Header = styled.header`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 4fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'logo location signin signin signin signin';

  align-items: center;

  @media (max-width: 700px) {
    grid-template-columns: 1fr 75px;
    grid-template-rows: 1fr 1fr;
    grid-gap: 5px;
    grid-template-areas: 'logo  signin' 'location location';
  }
`;
export const Location = styled.div`
  font-size: 1.3rem;
  line-height: 34px;
  text-align: right;

  display: flex;
  flex-direction: column;

  grid-area: location;

  img {
    grid-area: logo;

    @media (max-width: 700px) {
      width: 200px;
    }
  }

  @media (max-width: 700px) {
    justify-self: start;
    margin-left: 20px;
    line-height: 22px;
    text-align: center;
  }
`;
export const LogInButton = styled(Link)`
  width: 222px;
  height: 56px;
  background: #12d4e0;
  font-size: 1.1rem;
  color: #fff;
  grid-area: signin;
  border-radius: 20px;

  justify-self: end;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.2s;

  &&:hover {
    background: #96feff;
    color: #15c3d6;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const LogInButtonIcon = styled(Link)`
  display: none;
  grid-area: signin;

  @media (max-width: 700px) {
    width: 60px;
    height: 60px;
    background: #12d4e0;
    border-radius: 30px;
    margin-right: 15px;

    display: flex;
    align-items: center;
    justify-content: center;

    &&:hover {
      background: #96feff;
    }
  }
`;

export const Main = styled.main`
  max-width: 350px;

  h1 {
    font-size: 5rem;
    font-weight: 900;
    line-height: 70px;
  }

  p {
    margin-top: 40px;
    font-size: 1.5rem;
    line-height: 34px;
  }

  strong {
    font-weight: 800;
  }

  @media (max-width: 700px) {
    max-width: 280px;
    margin-left: 5px;
    padding-bottom: 9px;

    h1 {
      font-size: 4rem;
      font-weight: 800;
      line-height: 50px;
    }

    p {
      width: 255px;
    }
  }
`;

export const EnterButton = styled(Link)`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 80px;
  height: 80px;
  background: #ffd666;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  &&:hover {
    background: #96feff;
  }

  @media (max-width: 700px) {
    right: 10px;
  }

  @media (max-width: 340px) {
    width: 50px;
    height: 50px;

    right: 10px;
    bottom: 10px;
  }
`;
