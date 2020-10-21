import styled from 'styled-components';
import { darken } from 'polished';

interface WrapperProps {
  primaryColor: string;
}

export const Wrapper = styled.div<WrapperProps>`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.primaryColor};

  display: flex;

  justify-content: space-evenly;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  h1 {
    font-weight: 800;
    font-size: 80px;
    margin-bottom: 20px;
  }

  p {
    width: 30vw;
    font-size: 24px;
    line-height: 40px;
    text-align: center;
  }
`;

export const Image = styled.img`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

interface IButtonProps {
  primaryColor: string;
}

export const Button = styled.button<IButtonProps>`
  margin-top: 64px;
  font-size: 18px;
  text-align: center;
  font-weight: 800;
  color: #fff;
  cursor: pointer;
  outline: none;
  border: 0;

  background: ${(props) => darken(0.15, props.primaryColor)};
  opacity: 0.8;
  border-radius: 20px;
  padding: 20px 40px;
  transition: all 0.5s;

  &&:hover {
    opacity: 0.6;
  }
`;
