import React from 'react';
import {
  HeaderContainer,
  LogoDiv,
  LogoImage,
  LogoFont,
  RightDiv,
  UserLoggedIn,
  LoginSignupLink,
  InputContainer,
  InputField,
  SearchImg,
} from './Header.style';
import { useHeader } from './Header.hooks';
import { HeaderProps } from './Header.type';

const Header: React.FC<HeaderProps> = () => {
  const isLogged = useHeader();

  return (
    <HeaderContainer>
      <LogoDiv>
        <LogoImage src="/assets/logo.jpg" alt="로고" />
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
          <SearchImg src="/assets/searchIcon.png" alt="검색 아이콘" />
        </InputContainer>
      </RightDiv>
    </HeaderContainer>
  );
};

export default Header;
