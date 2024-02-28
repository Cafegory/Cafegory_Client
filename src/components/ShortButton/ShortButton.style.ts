import styled from 'styled-components';
import { ShortButtonProps } from './ShortButton.type';

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ButtonStyle = styled.div<ShortButtonProps>`
  height: 50px;
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.9rem;
  cursor: pointer;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.8;
  }
  background-color: green;
  background-color: ${(props) => (props.color === 'black' ? 'black' : 'white')};
  border: ${(props) =>
    props.color === 'black' ? '2px solid black' : '2px solid black'};
`;

export const Font = styled.div<{ color: 'white' | 'black' }>`
  font-size: 1.3rem;
  color: ${(props) => (props.color === 'white' ? 'black' : 'white')};
`;
