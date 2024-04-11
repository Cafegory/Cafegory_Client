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
  &:hover {
    background-color: ${(props) =>
      props.color === 'white' ? '#e0e0e0' : 'rgba(0, 0, 0, 0.8)'};
    color: ${(props) =>
      props.color === 'white' ? 'rgba(0, 0, 0, 0.8)' : 'white'};
  }
  background-color: ${(props) => (props.color === 'black' ? 'black' : 'white')};
  &:active {
    background-color: darkgray;
  }
`;

export const Font = styled.div<{ color: 'white' | 'black' }>`
  font-size: 1rem;
  color: ${(props) => (props.color === 'white' ? 'black' : 'white')};
`;
