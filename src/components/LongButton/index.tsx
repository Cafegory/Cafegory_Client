import React from 'react';
import { ButtonContainer, ButtonStyle, Font } from './LongButton.style';
import { LongButtonProps } from './LongButton.type';

const LongButton: React.FC<LongButtonProps> = ({ message, color }) => {
  return (
    <ButtonContainer>
      <ButtonStyle color={color}>
        <Font>{message}</Font>
      </ButtonStyle>
    </ButtonContainer>
  );
};

export default LongButton;
