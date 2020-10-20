import React from 'react';

import { ButtonStyle } from './styles';

interface IButtonProps {
  name: string;
  isActive: boolean;
}

const Button: React.FC<IButtonProps> = ({
  name,
  isActive = false,
  ...props
}) => {
  return (
    <ButtonStyle
      name={name}
      disabled={isActive ? false : true}
      isActive={isActive}
      {...props}
    >
      {name}
    </ButtonStyle>
  );
};

export default Button;
