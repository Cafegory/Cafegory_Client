// Button.tsx

import React from 'react';
import { ButtonContainer, ButtonStyle, Font } from './Button.style';
import { ButtonProps } from './Button.type';

const Button: React.FC<ButtonProps> = ({ message, color }) => {
  return (
    <ButtonContainer>
      <ButtonStyle color={color}>
        <Font>{message}</Font>
      </ButtonStyle>
    </ButtonContainer>
  );
};

export default Button;
