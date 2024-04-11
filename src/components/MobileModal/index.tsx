import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CloseButton,
  Header,
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
      </ModalContainer>
      <ModalBackdrop></ModalBackdrop>
    </>
  );
};

export default MobileModal;
