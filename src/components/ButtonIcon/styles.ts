import styled from 'styled-components';

interface IButtonProps {
  backgroundColor: string;
}

export const Button = styled.button<IButtonProps>`
  width: 48px;
  height: 48px;

  border: 0;
  outline: none;

  background: ${(props) => props.backgroundColor};
  border-radius: 16px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.2s;

  &&:hover {
    opacity: 0.7;
  }
`;
