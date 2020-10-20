import styled from 'styled-components';

export const Container = styled.div``;
export const Aside = styled.aside`
  position: fixed;
  height: 100%;
  padding: 32px 24px;
  background: linear-gradient(329.54deg, #15b6d6 0%, #15d6d6 100%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 48px;
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  > button {
    margin-bottom: 20px;
  }
`;

export const Footer = styled.footer`
  a,
  button {
    width: 48px;
    height: 48px;

    border: 0;

    background: #12afcb;
    border-radius: 16px;

    cursor: pointer;

    transition: background-color 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  a,
  b:hover {
    background: #17d6eb;
  }
`;
