import React from 'react';
import Loader from 'react-loader-spinner';

import { ButtonStyle } from './styles';

interface IButtonProps {
  name: string;
  isActive: boolean;
  loading: boolean;
}

const Button: React.FC<IButtonProps> = ({
  name,
  loading = false,
  isActive = false,
  ...props
}) => {
  return (
    <ButtonStyle
      name={name}
      disabled={isActive ? false : true}
      isActive={isActive}
      loading={loading}
      {...props}
    >
      {!loading ? (
        name
      ) : (
        <Loader type="Puff" color="#cecece" height={40} width={40} />
      )}
    </ButtonStyle>
  );
};

export default Button;
