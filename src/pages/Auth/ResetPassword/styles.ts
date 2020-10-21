import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const Fieldset = styled.fieldset`
  border: 0;

  p {
    width: 25vw;
    color: #5c8599;
    font-size: 1rem;
    line-height: 23px;
    margin-bottom: 30px;
  }
`;

export const Title = styled.h1`
  color: #5c8599;
  font-size: 1.9rem;
  font-weight: bold;

  margin-bottom: 20px;
`;

export const Field = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  label {
    color: #8fa7b2;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

export const Input = styled.input`
  height: 50px;
  background: #f5f8fa;
  color: #5c8599;
  font-weight: 600;
  padding: 0 55px 0 24px;

  border: 1px solid #d3e2e5;
  border-radius: 20px;

  outline: none;
`;

export const EyeContainer = styled.div`
  position: absolute;
  width: 60px;
  height: 50px;
  bottom: 0;
  right: 0;
  cursor: pointer;

  display: flex;

  justify-content: center;
  align-items: center;

  &&:hover {
    opacity: 0.8;
  }
`;
