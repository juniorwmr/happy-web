import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  width: 60vw;
  margin: 64px auto 25px;

  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #d3e2e5;
  padding-bottom: 24px;

  legend {
    color: #4d6f80;
    font-weight: bold;
    font-size: 2rem;
  }

  p {
    color: #8fa7b2;
    font-weight: 600;
    font-size: 1rem;
  }
`;
