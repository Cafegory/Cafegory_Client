import styled from 'styled-components';
import { SidebarButtonProps } from './SidebarButton.types';

export const SidebarButton = styled.div<SidebarButtonProps>`
  background-color: ${props => props.backgroundColor || 'rgba(0, 0, 0, 0)'};
  height: 7%;
  width: 90%;
  display:flex;
  align-items: center;
  font-size:1rem;
  cursor:pointer;
  padding-left:10%;

  &:hover {
    background-color: lightgray;
  }

  &:active {
    background-color: darkgray;
  }
`;