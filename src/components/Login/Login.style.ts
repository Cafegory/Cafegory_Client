import styled from 'styled-components';
import { LoginButtonProps, FontColorProps } from './Login.types';

export const LoginModal = styled.div`
  padding: 2.5rem 5.5rem 0 4.5rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20%;
  height: 30%;
  background-color: white;
  z-index: 100;
  border-radius:20px
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const LoginTextContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size:1.9rem;
  font-weight:600;
  margin-bottom:1.5rem;
`;


export const LoginButtonContainer = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  margin:0.5rem 0 0.5rem 0;
`

export const LoginButton = styled.div<LoginButtonProps & FontColorProps>`
  height:2.6rem;
  width:60%;
  font-size:0.8rem;
  background-color: ${props => props.backgroundColor || 'black'};
  border-radius: 8px;
  display:flex;
  align-items:center;
  justify-content:center;
  color:${props => props.fontColor || 'white'};
  font-weight:700;
  gap:0.4rem;
  cursor:pointer;
  
  &:hover {
    border : 3px solid red;
  }
`;

export const NaverLogo = styled.img`
  width: 1.9rem;
  height: 1.8rem;
`;

export const KakaoLogo = styled.img`
  width: 1.7rem;
  height: 1.5rem;
`;