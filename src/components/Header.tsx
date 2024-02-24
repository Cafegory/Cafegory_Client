import React from 'react';
import Logo from '../image/logo.jpg';
import styled from 'styled-components';
import { useStore } from '../hooks/store';
import SearchIcon from '../image/searchIcon.png';

const HeaderContainer = styled.div`
  display: flex;
  height: 107.22px;
  flex-direction: row;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: space-between;
  padding: 0em 2em 0em 2em;
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
`;

const RightDiv = styled.div`
  display: flex;
`;

const LogoImage = styled.img`
  border-radius: 100%;
  width: 53.61px;
  height: 53.61px;
  margin-right: 1em;
`;

const LogoFont = styled.div`
  display: flex;
  font-size: 37.53px;
  font-weight: 500;
`;

const UserLoggedIn = styled.div`
  font-size: 21.44px;
`;

const LoginSignupLink = styled.a`
  margin-left: 1em;
  text-decoration: none;
  color: inherit;
`;

const InputContainer = styled.div`
  position: relative;
`;

const InputField = styled.input`
  padding: 0em 0em 0em 0.5em;
  border-radius: 8.04px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 268.05;
  height: 48.44px;
`;

const SearchImg = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 26.81px;
  height: 26.81px;
`;

const Header = () => {
  const isLoggined = useStore((state) => state.isLoggined);

  return (
    <div>
      <HeaderContainer>
        <LogoDiv>
          <LogoImage src={Logo} alt="로고" />
          <LogoFont>Cafegory.</LogoFont>
        </LogoDiv>
        <RightDiv>
          <UserLoggedIn>
            {' '}
            {isLoggined ? (
              <>
                ooo님 환영합니다!
                <LoginSignupLink href="">로그아웃</LoginSignupLink>
              </>
            ) : (
              <>
                <LoginSignupLink href="">로그인</LoginSignupLink>
                <LoginSignupLink href="">회원가입 </LoginSignupLink>
              </>
            )}
          </UserLoggedIn>
          <InputContainer>
            <InputField type="text" placeholder="검색하기" />
            <SearchImg src={SearchIcon} alt="Search" />
          </InputContainer>
        </RightDiv>
      </HeaderContainer>
    </div>
  );
};

export default Header;
