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
  const {
    editContent,
    setEditContent,
    setCommentId,
    setIsQuestion,
    isQuestion,
    patchQuestion,
    patchAnswer,
  } = QnaEditApiState();

  const handleEdit = () => {
    if (isQuestion) {
      patchQuestion();
      window.location.reload();
    } else {
      patchAnswer();
      window.location.reload();
    }
  };

  return (
    <>
      <ModalContainer>
        <TitleFont>수정하기</TitleFont>
        <ContentInput
          value={editContent}
          onChange={(e) => {
            setEditContent(e.target.value);
          }}
        ></ContentInput>
        <ShortButton
          message="수정하기"
          color="black"
          onClick={handleEdit}
        ></ShortButton>
      </ModalContainer>
      <ModalBackdrop onClick={toggleModal}></ModalBackdrop>
    </>
  );
};

export default QnaEditModal;
