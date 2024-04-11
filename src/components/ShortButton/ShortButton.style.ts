import styled from 'styled-components';
import { ShortButtonProps } from './ShortButton.type';

export const ButtonStyle = styled.div<ShortButtonProps>`
  height: 3rem;
  width: 14.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.6rem;
  cursor: pointer;
  border: 2px solid black;
  transition:
    background-color 0.3s,
    color 0.3s;
  background-color: ${(props) => (props.color === 'black' ? 'black' : 'white')};
  &:active {
    background-color: darkgray;
  }

  @media (max-width: 768px) {
    height: 2.5rem;
    width: 40%;
  }
`;

export const Font = styled.div<{ color: 'white' | 'black' }>`
  font-size: 1rem;
  color: ${(props) => (props.color === 'white' ? 'black' : 'white')};
`;
