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
  margin-left: 1rem;
`;

export const LogoImage = styled.img`
  border-radius: 100%;
  width: 1.9rem;
  height: 1.9rem;
`;

export const LogoFont = styled.div`
  display: flex;
  font-size: 1.4rem;
  font-weight: 450;
`;

export const RightDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  height: 100%;
  gap: 2rem;
`;

export const LoginSignupLink = styled.div`
  font-size: 0.85rem;
  display: flex;
  height: 50%;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
`;

export const WelcomeMessageBox = styled.div`
  font-size: 0.85rem;
  display: flex;
  align-items: center;
`;

export const InputContainer = styled.div`
  width: 11rem;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  border: 1px solid #ccc;
`;

export const InputField = styled.input`
  width: 100%;
  border: none;
  font-size: 0.7rem;
  &:focus {
    outline: none;
  }
`;

export const SearchImg = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  cursor: pointer;
`;
