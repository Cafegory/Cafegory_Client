import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  ButtonContainer,
  CloseButton,
  Header,
  LastButton,
  ModalBackdrop,
  ModalContainer,
} from './MobileModal.style';
import { useStoreMobile } from './MobileModal.hooks';

const MobileModal: React.FC = () => {
  const navigate = useNavigate();

  const toggleLoginModal = useStoreMobile((state) => state.toggleMobileModal);
  const closeModal = () => {
    toggleLoginModal();
  };

  return (
    <>
      <ModalContainer>
        <Header>
          <CloseButton onClick={closeModal}>x</CloseButton>
        </Header>
        <ButtonContainer>
          <Button
            onClick={() => {
              closeModal();
              navigate('/cafe');
            }}
          >
            😀 카페 검색
          </Button>
          <Button
            onClick={() => {
              closeModal();
              navigate('/cafeMeetingSearch');
            }}
          >
            ☕ 카공 모임 검색
          </Button>
          <LastButton
            onClick={() => {
              closeModal();
              navigate('/my');
            }}
          >
            📌 마이페이지
          </LastButton>
        </ButtonContainer>
      </ModalContainer>
      <ModalBackdrop></ModalBackdrop>
    </>
  );
};

export default MobileModal;
