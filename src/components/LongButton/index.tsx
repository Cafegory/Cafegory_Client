import React from 'react';
import { ButtonStyle, Font } from './LongButton.style';
import { LongButtonProps } from './LongButton.type';

const LongButton: React.FC<LongButtonProps> = ({ message, color }) => {
  return (
    <ButtonStyle color={color}>
      <Font>{message}</Font>
    </ButtonStyle>
  );
};

export default LongButton;
