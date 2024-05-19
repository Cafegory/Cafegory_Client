import React, { useEffect } from 'react';
import { DeleteModal, CommentFont, ButtonContainer } from './DeleteModal.style';
import { useStore } from './DeleteModal.hooks';
import ShortButton from 'components/ShortButton';
import { reviewApiStore } from 'components/ReviewModal/ReviewModal.hooks';

const Delete: React.FC = () => {
  const toggleDeleteModal = useStore((state) => state.toggleDeleteModal);
  const { reviewId } = useStore();

  const closeModal = () => {
    toggleDeleteModal();
  };

  const { deleteReview } = reviewApiStore();

  const handleDeleteReview = async (id) => {
    deleteReview(id);
    window.location.reload();
  };

  return (
    <>
      <DeleteModal>
        <CommentFont>정말로 삭제하실 건가요...?</CommentFont>
        <ButtonContainer>
          <ShortButton
            message="삭제"
            color="black"
            onClick={() => handleDeleteReview(reviewId)}
          ></ShortButton>
          <ShortButton
            message="취소"
            color="white"
            onClick={closeModal}
          ></ShortButton>
        </ButtonContainer>
      </DeleteModal>
    </>
  );
};

export default Delete;
