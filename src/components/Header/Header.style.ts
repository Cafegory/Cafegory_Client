import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  height: 6.75rem;
  flex-direction: row;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    height: auto;
  }
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  border-radius: 100%;
  width: 20%;
  height: 3.33rem;
  margin-right: 1em;
`;

export const LogoFont = styled.div`
  display: flex;
  font-size: 2.34rem;
  font-weight: 500;
`;

export const RightDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  @media screen and (max-width: 500px) {
    margin: 1rem 0;
  }
`;

export const UserLoggedIn = styled.div`
  font-size: 1.1rem;
`;

export const LoginSignupLink = styled.a`
  margin-left: 2.5em;
  text-decoration: none;
  color: inherit;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 4em;
  border-radius: 8.04px;
  border: 1px solid #ccc;
`;

export const InputField = styled.input`
  padding: 0.5em;
  border: none;
  font-size: 1rem;
  flex: 1;
  height: 2rem;
  &:focus {
    outline: none;
  }
  margin-left: 0.5em;
`;

export const SearchImg = styled.img`
  width: 10%;
  height: 1.68rem;
  cursor: pointer;
  margin-right: 2em;
`;
