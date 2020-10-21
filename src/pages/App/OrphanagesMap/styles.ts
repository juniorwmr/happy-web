import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;

  .leaflet-container {
    z-index: 5;

    @media (max-width: 700px) {
      z-index: 1;
    }
  }

  .map-popup {
    .leaflet-popup-content-wrapper {
      background: rgba(255, 255, 255, 0.8);
      border-radius: 20px;
    }

    .leaflet-popup-content {
      color: #0089a5;
      font-size: 20px;
      font-weight: bold;
      margin: 8px 12px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        width: 40px;
        height: 40px;
        background: #15c3d6;
        box-shadow: 17.2868px 27.6589px 41.488px rgba(23, 142, 166, 0.16);
        border-radius: 12px;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .leaflet-popup-tip-container {
      display: none;

      a {
        width: 40px;
        height: 40px;
        background: #15c3d6;
        box-shadow: 17.2868px 27.6589px 41.488px rgba(23, 142, 166, 0.16);
        border-radius: 12px;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .leaflet-popup-tip-container {
      display: none;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Aside = styled.aside`
  width: 400px;
  background: linear-gradient(329.54deg, #2986d1 0%, #00c7c7 100%);
  padding: 60px;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }

  p {
    line-height: 28px;
    margin-top: 24px;
    @media (max-width: 700px) {
      display: none;
    }
  }

  footer {
    display: flex;
    flex-direction: column;

    line-height: 24px;

    animation: down 500ms backwards;
    @media (max-width: 700px) {
      display: none;
    }
    strong {
      font-weight: 800;
    }
  }

  @media (max-width: 700px) {
    width: 100vw;
    height: 13vh;
    padding: 0;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 1.8rem;
      line-height: 0px;
      margin-top: 0px;
    }
  }
`;

export const Header = styled.header`
  img {
    @media (max-width: 700px) {
      display: none;
    }
  }
`;

export const CreateButton = styled(Link)`
  position: absolute;
  right: 40px;
  bottom: 40px;

  z-index: 10;

  width: 64px;
  height: 64px;
  background: #15c3d6;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s;

  &&:hover {
    background: #17d6eb;
  }

  @media (max-width: 700px) {
    right: 40px;
    bottom: 40px;

    z-index: 2;
  }
`;
