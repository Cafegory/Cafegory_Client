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
import Refresh from 'components/RefreshModal';
import { refreshStore } from 'components/RefreshModal/RefreshModal.hooks';

const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate();

  const isLoginModalOpen = useStore((state) => state.isLoginModalOpen);
  const toggleLoginModal = useStore((state) => state.toggleLoginModal);
  const { isLoggedIn, setIsLoggedIn } = useUser();

  const isMobileModalOpen = useStoreMobile((state) => state.isMobileModalOpen);
  const toggleMobileModal = useStoreMobile((state) => state.toggleMobileModal);

  const isRefreshModalOpen = refreshStore((state) => state.isRefreshModalOpen);

  const { toggleRefreshModal } = refreshStore();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('memberId');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <>
      {isLoggedIn && (
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
            <WelcomeMessageBox>{`${localStorage.getItem(
              'userName',
            )}님 환영합니다!`}</WelcomeMessageBox>
            <LoginSignupLink onClick={handleLogout}>로그아웃</LoginSignupLink>
          </RightDiv>
        </HeaderContainer>
      )}
      {!isLoggedIn && (
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
            <LoginSignupLink onClick={toggleLoginModal}>로그인</LoginSignupLink>
          </RightDiv>
        </HeaderContainer>
      )}
      {isLoginModalOpen && <Login />}
      {isMobileModalOpen && <MobileModal />}
      {isRefreshModalOpen && <Refresh />}
    </>
  );
};

export default Header;
