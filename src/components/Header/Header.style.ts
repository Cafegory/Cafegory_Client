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
  align-items: center;
  cursor: pointer;
  border-radius: 20px;
  margin-left: 1.2rem;

  @media screen and (max-width: 768px) {
    margin-left: 0.5rem;
    gap:0.5rem;
  }
`;

export const LogoImage = styled.img`
  width: 6rem;
  height: 1.4rem;
`;

export const HambergerButton = styled.img`
  width: 1.1rem;
  height: 1.1rem;

  @media screen and (min-width: 769px) {
    display: none; 
 }
`;

export const RightDiv = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 2rem;
  margin-right: 2rem;

  @media screen and (max-width: 768px) {
    gap: 0.5rem;
    margin-right: 1rem;
  }
`;

export const LoginSignupLink = styled.div`
  display: flex;
  height: 50%;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  font-size:0.85rem;

  @media screen and (max-width: 768px) {
    font-size:0.75rem;
  }
`;

export const WelcomeMessageBox = styled.div`
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  font-size:0.85rem;

  @media screen and (max-width: 768px) {
    font-size:0.75rem;
  }
`;

