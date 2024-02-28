import React from 'react';
import { ButtonContainer, ButtonStyle, Font } from './LongButton.style';
import { ButtonProps } from './LongButton.type';

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
