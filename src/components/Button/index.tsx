import React from 'react';
import { ButtonContainer, ButtonStyle, Font } from './Button.style';
// import { useHeader } from './Header.hooks';
import { ButtonProps } from './Button.type';

const Button: React.FC<ButtonProps> = ({ message }) => {
  return (
    <ButtonContainer>
      <ButtonStyle>
        <Font>{message}</Font>
      </ButtonStyle>
    </ButtonContainer>
  );
};

export default Button;
