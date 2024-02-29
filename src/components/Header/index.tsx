import React, { useState } from 'react';
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
import Login from '../Login';
import { useHeader } from './Header.hooks';
import { HeaderProps } from './Header.type';
import { useNavigate } from 'react-router-dom';
import { useStore } from './Header.hooks';

const Header: React.FC<HeaderProps> = () => {
  const isLogged = useHeader();
  const navigate = useNavigate();
  const userName = '박소정';

  const isLoginModalOpen = useStore((state) => state.isLoginModalOpen);
  const toggleLoginModal = useStore((state) => state.toggleLoginModal);

  return (
    <>
      <HeaderContainer>
        <LogoDiv>
          <LogoImage src="/assets/logo.jpg" alt="로고" />
          <LogoFont>Cafegory.</LogoFont>
        </LogoDiv>
        <RightDiv>
          {isLogged ? (
            <>
              <WelcomeMessageBox>{`${userName}님 환영합니다!`}</WelcomeMessageBox>
              <UserLoggedIn>
                <LoginSignupLink>로그아웃</LoginSignupLink>
              </UserLoggedIn>
              s
            </>
          ) : (
            <UserLoggedIn>
              <LoginSignupLink onClick={toggleLoginModal}>
                로그인
              </LoginSignupLink>
            </UserLoggedIn>
          )}
          <InputContainer>
            <InputField type="text" placeholder="검색하기" />
            <SearchImg src="/assets/search-icon.png" alt="검색 아이콘" />
          </InputContainer>
        </RightDiv>
      </HeaderContainer>
      {isLoginModalOpen && <Login />}
    </>
  );
};

export default Header;
