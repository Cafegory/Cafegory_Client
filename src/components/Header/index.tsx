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
  WelcomeMessageBox,
} from './Header.style';
import { useHeader } from './Header.hooks';
import { HeaderProps } from './Header.type';
import { useNavigate } from 'react-router-dom';

const Header: React.FC<HeaderProps> = () => {
  const isLogged = useHeader();
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <LogoDiv
        onClick={() => {
          navigate('/');
        }}
      >
        <LogoImage src="/assets/logo.jpg" alt="로고" />
        <LogoFont>Cafegory.</LogoFont>
      </LogoDiv>
      <RightDiv>
        {isLogged ? (
          <>
            <WelcomeMessageBox>ooo님 환영합니다!</WelcomeMessageBox>
            <UserLoggedIn>
              <LoginSignupLink>로그아웃</LoginSignupLink>
            </UserLoggedIn>
          </>
        ) : (
          <UserLoggedIn>
            <LoginSignupLink>회원가입</LoginSignupLink>
            <LoginSignupLink>로그인</LoginSignupLink>
          </UserLoggedIn>
        )}
        <InputContainer>
          <InputField type="text" placeholder="검색하기" />
          <SearchImg src="/assets/searchIcon.png" alt="검색 아이콘" />
        </InputContainer>
      </RightDiv>
    </HeaderContainer>
  );
};

export default Header;
