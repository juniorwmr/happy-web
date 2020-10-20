import React from 'react';

import { Button } from './styles';

interface IButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  backgroundColor: string;
}

const ButtonIcon: React.FC<IButtonProps> = ({
  children,
  backgroundColor,
  ...props
}) => {
  return (
    <Button type="button" backgroundColor={backgroundColor} {...props}>
      {children}
    </Button>
  );
};

export default ButtonIcon;
