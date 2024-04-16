import React from 'react';
import {
  HeaderContainer,
  LogoDiv,
  LogoImage,
  LogoFont,
  RightDiv,
  LoginSignupLink,
  WelcomeMessageBox,
  HambergerButton,
} from './Header.style';
import Login from '../LoginModal';
import { HeaderProps } from './Header.types';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../LoginModal/LoginModal.hooks';
import { useUser } from '../../store/users/store';
import MobileModal from 'components/MobileModal';
import { useStoreMobile } from '../MobileModal/MobileModal.hooks';

const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate();
  const userName = '박소정';

  const isLoginModalOpen = useStore((state) => state.isLoginModalOpen);
  const toggleLoginModal = useStore((state) => state.toggleLoginModal);
  const { isLoggedIn, setIsLoggedIn } = useUser();

  const isMobileModalOpen = useStoreMobile((state) => state.isMobileModalOpen);
  const toggleMobileModal = useStoreMobile((state) => state.toggleMobileModal);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <HeaderContainer>
        <LogoDiv>
          <HambergerButton
            src="/assets/hamberger-button.png"
            alt="햄버거"
            onClick={toggleMobileModal}
          />
          <LogoImage
            onClick={() => {
              navigate('/');
            }}
            src="/assets/logo.jpg"
            alt="로고"
          />
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
      {isMobileModalOpen && <MobileModal />}
    </>
  );
};

export default Header;
