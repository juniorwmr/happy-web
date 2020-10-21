import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.div`
  flex: 1;
`;

export const Form = styled.form`
  width: 700px;
  margin: 64px auto;

  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  padding: 64px 80px;

  overflow: hidden;

  .leaflet-container {
    margin-bottom: 40px;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
  }
`;
export const Fieldset = styled.fieldset`
  border: 0;

  + fieldset {
    margin-top: 80px;
  }

  legend {
    width: 100%;

    font-size: 32px;
    line-height: 34px;
    color: #5c8599;
    font-weight: 700;

    border-bottom: 1px solid #d3e2e5;
    margin-bottom: 40px;
    padding-bottom: 24px;
  }
`;
export const InputField = styled.div`
  && + && {
    margin-top: 24px;
  }

  label {
    display: flex;
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;
  }

  span {
    font-size: 14px;
    color: #8fa7b3;
    margin-left: 24px;
    line-height: 24px;
  }

  input,
  textarea {
    width: 100%;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    outline: none;
    color: #5c8599;
  }

  input {
    height: 64px;
    padding: 0 16px;
  }

  textarea {
    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    line-height: 28px;
  }
`;

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 16px;

  > div {
    position: relative;
  }

  img {
    width: 100%;
    height: 96px;
    object-fit: cover;
    border-radius: 28px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: inset 0 0 2px #fff, 0 0 12px rgba(0, 0, 0, 0.05);
  }

  label {
    height: 96px;
    background: #f5f8fa;
    border: 1px dashed #96d2f0;
    border-radius: 20px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  input[type='file'] {
    display: none;
  }
`;

export const RemoveButton = styled.button.attrs({ type: 'button' })`
  position: absolute;
  width: 40px;
  height: 40px;
  background: '#FFF';
  right: 0;
  top: 0;
  cursor: pointer;
  outline: none;

  border: 1px solid #d3e2e5;
  box-sizing: border-box;
  border-radius: 0px 20px;

  display: flex;

  align-items: center;
  justify-content: center;

  &&:hover {
    -webkit-box-shadow: 0px 0px 18px -2px rgba(255, 102, 102, 1);
    -moz-box-shadow: 0px 0px 18px -2px rgba(255, 102, 102, 1);
    box-shadow: 0px 0px 18px -2px rgba(255, 102, 102, 1);
  }
`;

export const SelectButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  button {
    height: 64px;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    color: #5c8599;
    cursor: pointer;
    outline: none;
  }

  button:first-child {
    border-radius: 20px 0px 0px 20px;
  }

  button:last-child {
    border-radius: 0 20px 20px 0;
    border-left: 0;
  }

  button.active {
    background: linear-gradient(154.16deg, #edfff6 7.85%, #ffffff 91.03%);
    border: 1px solid #a1e9c5;
    color: #37c77f;
  }

  button.active.dont-open {
    background: linear-gradient(154.16deg, #fdf8f5 7.85%, #ffffff 91.03%);
    border: 1px solid #ffbcd4;
    color: #ff6690;
  }
`;
