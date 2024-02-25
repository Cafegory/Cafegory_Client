import React from 'react';
import Logo from '../image/logo.jpg';
import styled from 'styled-components';
import { useStore, StoreState } from '../hooks/store';
import SearchIcon from '../image/searchIcon.png';

const HeaderContainer = styled.div`
  display: flex;
  height: 6.75rem;
  flex-direction: row;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  @media screen and (max-width: 48em) {
    flex-direction: column;
    height: auto;
  }
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  border-radius: 100%;
  width: 3.33rem;
  height: 3.33rem;
  margin-right: 1em;
`;

const LogoFont = styled.div`
  display: flex;
  font-size: 2.34rem;
  font-weight: 500;
`;

const RightDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  @media screen and (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const UserLoggedIn = styled.div`
  font-size: 1.1rem;
`;

const LoginSignupLink = styled.a`
  margin-left: 2.5em;
  text-decoration: none;
  color: inherit;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 4em;
  border-radius: 8.04px;
  border: 1px solid #ccc;
`;

const InputField = styled.input`
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

const SearchImg = styled.img`
  width: 1.68rem;
  height: 1.68rem;
  cursor: pointer;
  margin-right: 0.5em;
`;

const Header: React.FC = () => {
  const isLogged = useStore((state: StoreState) => state.isLogged);

  return (
    <HeaderContainer>
      <LogoDiv>
        <LogoImage src={Logo} alt="로고" />
        <LogoFont>Cafegory.</LogoFont>
      </LogoDiv>
      <RightDiv>
        <UserLoggedIn>
          {isLogged ? (
            <>
              ooo님 환영합니다!
              <LoginSignupLink href="">로그아웃</LoginSignupLink>
            </>
          ) : (
            <>
              <LoginSignupLink href="">회원가입</LoginSignupLink>
              <LoginSignupLink href="">로그인</LoginSignupLink>
            </>
          )}
        </UserLoggedIn>
        <InputContainer>
          <InputField type="text" placeholder="검색하기" />
          <SearchImg src={SearchIcon} alt="검색 아이콘" />
        </InputContainer>
      </RightDiv>
    </HeaderContainer>
  );
};

export default Header;
