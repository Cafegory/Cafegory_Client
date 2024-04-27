import React from 'react';
import {
  ContentInput,
  ModalBackdrop,
  ModalContainer,
  TitleFont,
} from './QnaEditModal.style';
import ShortButton from 'components/ShortButton';
import { QnaEditModalStore, QnaEditApiState } from './QnaEditModal.hooks';

const QnaEditModal: React.FC = () => {
  const toggleModal = QnaEditModalStore((state) => state.toggleModal);
  const { editContent, setEditContent } = QnaEditApiState();

  return (
    <>
      <ModalContainer>
        <TitleFont>수정하기</TitleFont>
        <ContentInput value={editContent}></ContentInput>
        <ShortButton message="수정하기" color="black"></ShortButton>
      </ModalContainer>
      <ModalBackdrop onClick={toggleModal}></ModalBackdrop>
    </>
  );
};

export default QnaEditModal;
