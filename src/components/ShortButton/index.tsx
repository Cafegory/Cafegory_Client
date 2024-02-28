import React from 'react';
import { ButtonContainer, ButtonStyle, Font } from './ShortButton.style';
import { ShortButtonProps } from './ShortButton.type';

const ShortButton: React.FC<ShortButtonProps> = ({ message, color }) => {
  return (
    <ButtonContainer>
      <ButtonStyle color={color} message={message}>
        <Font color={color}>{message}</Font>
      </ButtonStyle>
    </ButtonContainer>
  );
};

export default ShortButton;
