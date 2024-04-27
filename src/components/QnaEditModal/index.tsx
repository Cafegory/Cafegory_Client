import React from 'react';
import {
  ContentInput,
  ModalBackdrop,
  ModalContainer,
  TitleFont,
} from './QnaEditModal.style';
import ShortButton from 'components/ShortButton';

const QnaEditModal: React.FC = () => {
  return (
    <>
      <ModalContainer>
        <TitleFont>수정하기</TitleFont>
        <ContentInput></ContentInput>
        <ShortButton message="수정하기" color="black"></ShortButton>
      </ModalContainer>
      <ModalBackdrop></ModalBackdrop>
    </>
  );
};

export default QnaEditModal;
