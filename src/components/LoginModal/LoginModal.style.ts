import styled from 'styled-components';
import { LoginButtonProps, FontColorProps } from './LoginModal.types';

export const LoginModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: 31%;
  background-color: white;
  z-index: 100;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px;
  gap: 1rem;
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
  font-size: 1.9rem;
  font-weight: 600;
`;

export const LoginButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const LoginButton = styled.div<LoginButtonProps & FontColorProps>`
  height: 2.6rem;
  width: 45%;
  font-size: 0.8rem;
  background-color: ${(props) => props.backgroundColor || 'black'};
  border-radius: 8px;
  display:flex;
  align-items:center;
  justify-content:center;
  color:${props => props.fontColor || 'white'};
  font-weight:700;
  gap:0.5rem;
  cursor:pointer;
  
  &:hover {
    background-color:lightgray;
  }
  &:active {
    background-color:gray;
  }
`;

export const NaverLogo = styled.img`
  width: 1.5rem;
  height: 1.4rem;
`;

export const KakaoLogo = styled.img`
  width: 1.7rem;
  height: 1.5rem;
`;
