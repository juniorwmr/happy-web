import styled from 'styled-components';

export const ContainerButtons = styled.div`
  width: 100%;
  border: 0;
  margin-top: 64px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DeleteButton = styled.button`
  width: 100%;
  height: 64px;
  border: 0;
  cursor: pointer;
  background: #ff669d;
  border-radius: 20px;
  color: #ffffff;
  font-weight: 800;
  margin-right: 20px;
  outline: none;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  &&:hover {
    background: #ed5151;
  }
`;

export const ConfirmButton = styled.button`
  width: 100%;
  height: 64px;
  border: 0;
  cursor: pointer;
  background: #3cdc8c;
  border-radius: 20px;
  color: #ffffff;
  font-weight: 800;
  outline: none;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  &&:hover {
    background: #36cf82;
  }
`;
