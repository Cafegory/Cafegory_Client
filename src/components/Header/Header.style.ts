import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: white;
  position: fixed;
  display: flex;
  height: 7%;
  width: 100%;
  flex-direction: row;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: space-between;
`;

export const LogoDiv = styled.div`
  display: flex;
  height: 70%;
  width: 10.6%;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    margin-left: 0.5rem;
    gap:0.5rem;
    
  }

  @media screen and (min-width: 769px) {
    margin-left: 1rem;
  }
`;

export const LogoImage = styled.img`
  border-radius: 100%;
  width: 1.9rem;
  height: 1.9rem;
`;

export const HambergerButton = styled.img`
  width: 1.1rem;
  height: 1.1rem;

  @media screen and (min-width: 769px) {
    display: none; 
 }
`;

export const LogoFont = styled.div`
  display: flex;
  font-size: 1.4rem;
  font-weight: 450;

  @media screen and (max-width: 768px) {
     display: none; 
  }
`;

export const RightDiv = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 768px) {
    gap: 0.5rem;
    margin-right: 1rem;
  }

  @media screen and (min-width: 769px) {
    gap: 2rem;
    margin-right: 2rem;
  }
`;

export const LoginSignupLink = styled.div`
  display: flex;
  height: 50%;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size:0.75rem;
  }
  @media screen and (min-width: 769px) {
    font-size:0.85rem;
  }
`;

export const WelcomeMessageBox = styled.div`
  font-size: 0.85rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size:0.75rem;
  }
  @media screen and (min-width: 769px) {
    font-size:0.85rem;
  }
`;

