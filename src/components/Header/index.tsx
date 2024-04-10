import React from 'react';
import {
  HeaderContainer,
  LogoDiv,
  LogoImage,
  LogoFont,
  RightDiv,
  LoginSignupLink,
  WelcomeMessageBox,
} from './Header.style';
import Login from '../LoginModal';
import { HeaderProps } from './Header.types';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../LoginModal/LoginModal.hooks';
import { useUser } from '../../store/users/store';

const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate();
  const userName = '박소정';
  const isLoginModalOpen = useStore((state) => state.isLoginModalOpen);
  const toggleLoginModal = useStore((state) => state.toggleLoginModal);
  const { isLoggedIn, setIsLoggedIn } = useUser();

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
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
          {isLoggedIn ? (
            <>
              <WelcomeMessageBox>{`${userName}님 환영합니다!`}</WelcomeMessageBox>
              <LoginSignupLink onClick={handleLogout}>로그아웃</LoginSignupLink>
            </>
          ) : (
            <LoginSignupLink onClick={toggleLoginModal}>로그인</LoginSignupLink>
          )}
        </RightDiv>
      </HeaderContainer>
      {isLoginModalOpen && <Login />}
    </>
  );
};

export default Header;
