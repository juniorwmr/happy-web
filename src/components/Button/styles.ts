import styled from 'styled-components';

interface IButtonProps {
  name: string;
  isActive: boolean;
}

export const ButtonStyle = styled.button<IButtonProps>`
  background: #37c77f;
  width: 100%;
  height: 60px;
  border: 0;
  cursor: pointer;
  border-radius: 20px;
  color: #ffffff;
  font-weight: 800;
  opacity: ${(props) => (props.isActive ? 1.0 : 0.7)};
  outline: none;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;
