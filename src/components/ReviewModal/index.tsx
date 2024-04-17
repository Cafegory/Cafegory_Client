import React from 'react';
import {
  ReviewModal,
  ModalBackdrop,
  TitleContainer,
  ReviewsBox,
  ProfileImg,
  ReviewsUpContainer,
  ReviewsContentContainer,
  StarImg,
  ReviewsUserContainer,
  RateContainer,
  TitleFont,
  CloseButton,
  ReviewBoxContainer,
} from './ReviewModal.style';
import { reviewUseStore } from './ReviewModal.hooks';
import { reviewApiStore } from './ReviewModal.hooks';

const Review: React.FC = () => {
  const toggleReviewModal = reviewUseStore((state) => state.toggleReviewModal);

  const closeModal = () => {
    toggleReviewModal();
  };

  const { reviews, fetchReviews } = reviewApiStore();

  React.useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <>
      <ReviewModal>
        <TitleContainer>
          <TitleFont>전체 리뷰 {reviews.length}건</TitleFont>
          <CloseButton onClick={closeModal}>닫기</CloseButton>
        </TitleContainer>
        <ReviewBoxContainer>
          {reviews.map((review, index) => (
            <ReviewsBox>
              <ReviewsUpContainer>
                <ReviewsUserContainer>
                  <ProfileImg
                    src={reviews[index].writer.thumbnailImg}
                    alt="프사"
                  />
                  {reviews[index].writer.name}
                </ReviewsUserContainer>
                <RateContainer>
                  {[...Array(reviews[index].rate)].map(() => (
                    <StarImg src="/assets/star-icon.png" alt="별 아이콘" />
                  ))}
                </RateContainer>
              </ReviewsUpContainer>

              <ReviewsContentContainer>
                {reviews[index].content}
              </ReviewsContentContainer>
            </ReviewsBox>
          ))}
        </ReviewBoxContainer>
      </ReviewModal>
      <ModalBackdrop onClick={closeModal}></ModalBackdrop>
    </>
  );
};

export default Review;
