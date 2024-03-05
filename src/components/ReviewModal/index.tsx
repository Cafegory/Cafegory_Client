import React from 'react';
import { ReviewModal, ModalBackdrop } from './ReviewModal.style';
import { reviewUseStore } from './ReviewModal.hooks';

const Review: React.FC = () => {
  const toggleReviewModal = reviewUseStore((state) => state.toggleReviewModal);

  const closeModal = () => {
    toggleReviewModal();
  };

  return (
    <>
      <ReviewModal>hi</ReviewModal>
      <ModalBackdrop onClick={closeModal}></ModalBackdrop>
    </>
  );
};

export default Review;
