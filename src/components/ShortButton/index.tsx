import React from 'react';
import { ButtonStyle, Font } from './ShortButton.style';
import { ShortButtonProps } from './ShortButton.type';

const ShortButton: React.FC<ShortButtonProps> = ({ message, color }) => {
  return (
    <ButtonStyle color={color} message={message}>
      <Font color={color}>{message}</Font>
    </ButtonStyle>
  );
};

export default ShortButton;
