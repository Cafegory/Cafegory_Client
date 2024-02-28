import styled from 'styled-components';

export const HeaderContainer = styled.div`
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
  height: 100%;
  width: 10%;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  border-radius: 100%;
  width: 1.9rem;
  height: 1.9rem;
  margin: 0 0 0 0.5em;
`;

export const LogoFont = styled.div`
  display: flex;
  font-size: 1.4rem;
  font-weight: 450;
`;

export const RightDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 25%;
  height: 100%;
`;

export const UserLoggedIn = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
`;

export const LoginSignupLink = styled.div`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
`;

export const WelcomeMessageBox = styled.div`
  width: 40%;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
`;

export const InputContainer = styled.div`
  width: 45%;
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
