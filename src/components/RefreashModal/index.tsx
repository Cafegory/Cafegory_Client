import React from 'react';
import {
  RefreashModal,
  ModalBackdrop,
  ButtonContainer,
  MessageFont,
  QuestionFont,
} from './RefreashModal.style';
import { postToken, refreashStore } from './RefreashModal.hooks';
import ShortButton from 'components/ShortButton';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../store/users/store';

const Refreash: React.FC = () => {
  const toggleRefreashModal = refreashStore(
    (state) => state.toggleRefreashModal,
  );

  const navigate = useNavigate();

  const { setIsLoggedIn } = useUser();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreashToken');
    localStorage.removeItem('memberId');
    localStorage.removeItem('name');
    setIsLoggedIn(false);
    window.location.reload();
    toggleRefreashModal();
  };

  const handleTokenRefresh = async () => {
    try {
      await postToken();
      window.location.reload();
      toggleRefreashModal();
    } catch (error) {
      alert('토큰이 만료되었습니다. 재로그인 해주세요.');
      handleLogout();
    }
  };

  return (
    <>
      <RefreashModal>
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
      </RefreashModal>
      <ModalBackdrop></ModalBackdrop>
    </>
  );
};

export default Refreash;
