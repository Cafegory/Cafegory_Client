import React from 'react';
import Logo from '../image/logo.jpg';
import styled from 'styled-components';
import { useStore } from '../hooks/store';

const HeaderContainer = styled.div`
  display: flex;
  height: 107.22px;
  flex-direction: row;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  border-radius: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 53.61px;
  height: 53.61px;
  margin-right: 1em;
`;

const LogoFont = styled.div`
  display: flex;
  font-size: 48.2px;
`;

const UserLoggedIn = styled.div`
  font-size: 32.2px;
`;

const LoginSignupLink = styled.a`
  margin-left: 1em;
  text-decoration: none;
  color: inherit;
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
      </HeaderContainer>
    </div>
  );
};

export default Header;
