import React from 'react';
import {
  RefreshModal,
  ModalBackdrop,
  ButtonContainer,
  MessageFont,
  QuestionFont,
} from './RefreshModal.style';
import { postToken, refreshStore } from './RefreshModal.hooks';
import ShortButton from 'components/ShortButton';
import { useUser } from '../../store/users/store';
import { useNavigate } from 'react-router-dom';

const Refresh: React.FC = () => {
  const toggleRefreshModal = refreshStore((state) => state.toggleRefreashModal);

  const { setIsLoggedIn } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('memberId');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
    window.location.reload();
    toggleRefreshModal();
  };

  const handleTokenRefresh = async () => {
    const currentPath = window.location.pathname;
    localStorage.setItem('redirectUrl', currentPath);
    try {
      await postToken();
      const redirectUrl = localStorage.getItem('redirectUrl') || '/';
      navigate(redirectUrl);
      toggleRefreshModal();
    } catch (error) {
      alert('토큰이 만료되었습니다. 재로그인 해주세요.');
      handleLogout();
    }
  };

  return (
    <>
      <RefreshModal>
        <MessageFont>토큰이 만료되었습니다.</MessageFont>
        <QuestionFont>로그인 상태를 유지하시겠습니까?</QuestionFont>
        <ButtonContainer>
          <ShortButton
            message="유지"
            color="white"
            onClick={handleTokenRefresh}
          ></ShortButton>
          <ShortButton
            message="로그아웃"
            color="black"
            onClick={handleLogout}
          ></ShortButton>
        </ButtonContainer>
      </RefreshModal>
      <ModalBackdrop></ModalBackdrop>
    </>
  );
};

export default Refresh;
