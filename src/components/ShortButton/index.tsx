import React from 'react';
import { ButtonStyle, Font } from './ShortButton.style';
import { ShortButtonProps } from './ShortButton.type';

const ShortButton: React.FC<ShortButtonProps> = ({
  message,
  color,
  onClick,
}) => {
  return (
    <ButtonStyle message="ded" color={color} onClick={onClick}>
      <Font color={color}>{message}</Font>
    </ButtonStyle>
  );
};

export default ShortButton;
