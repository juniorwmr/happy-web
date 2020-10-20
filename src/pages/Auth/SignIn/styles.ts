import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const Fieldset = styled.fieldset`
  border: 0;
`;

export const Title = styled.h1`
  color: #5c8599;
  font-size: 1.9rem;
  font-weight: bold;

  margin-bottom: 30px;
`;

export const Field = styled.div`
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
  padding: 24px;

  border: 1px solid #d3e2e5;
  border-radius: 20px;

  outline: none;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;

  font-size: 1rem;
  margin-bottom: 20px;

  justify-content: space-between;
  align-items: center;
`;

interface ICheckBoxProps {
  checked: boolean;
}

export const FieldCheckBox = styled.div<ICheckBoxProps>`
  display: flex;

  justify-content: center;

  input[type='checkbox'] {
    width: 0;
    height: 0;
    position: relative;
    cursor: pointer;
  }
  input[type='checkbox']:before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background-color: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 8px;
    top: 0;
  }
  input[type='checkbox']:checked:before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background-color: #37c77f;
  }
  input[type='checkbox']:checked:after {
    content: '';
    display: block;
    width: 2.5px;
    height: 7px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 5px;
    left: 9px;
  }

  label {
    margin-left: 35px;
    color: #8fa7b2;
  }
`;
export const ForgetPassword = styled(Link)`
  text-decoration: none;
  color: #8fa7b2;
`;

export const Register = styled(Link)`
  text-decoration: none;
  color: #8fa7b2;
  margin-top: 20px;
  font-size: 1rem;
`;
