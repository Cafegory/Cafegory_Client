import React from 'react';
import { StudyModal, ModalBackdrop } from './StudyModal.style';
import { studyUseStore } from './StudyModal.hooks';

const Study: React.FC = () => {
  const toggleStudyModal = studyUseStore((state) => state.toggleStudyModal);

  const closeModal = () => {
    toggleStudyModal();
  };

  return (
    <>
      <StudyModal>hi</StudyModal>
      <ModalBackdrop onClick={closeModal}></ModalBackdrop>
    </>
  );
};

export default Study;
