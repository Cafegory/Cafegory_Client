import React from 'react';
import { ButtonStyle, Font } from './LongButton.style';
import { LongButtonProps } from './LongButton.type';

const LongButton: React.FC<LongButtonProps> = ({ message, color, onClick }) => {
  return (
    <ButtonStyle color={color} onClick={onClick}>
      <Font>{message}</Font>
    </ButtonStyle>
  );
};

export default LongButton;
