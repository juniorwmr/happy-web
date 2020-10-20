import styled from 'styled-components';

export const MapContainer = styled.div`
  .map {
    border-bottom: 1px solid #dde3f0;
    border-radius: 20px;
  }

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 40px;
`;

export const MapItem = styled.div`
  width: 28vw;
  height: 40vh;
  background: #fff;

  border-radius: 20px;
  border: 1px solid #d3e2e5;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

export const MapFooter = styled.footer`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  margin: 10px 20px;

  h2 {
    line-height: 1.5rem;
    color: #4d6f80;
    text-decoration: none;
  }
`;

export const ButtonIcon = styled.button`
  width: 48px;
  height: 48px;

  border: 0;
  outline: none;

  background: #ebf2f5;
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

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  > button {
    margin-left: 8px;
  }
`;
