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
  ReviewsEditContainer,
  ReviewsEditFont,
} from './ReviewModal.style';
import { reviewUseStore } from './ReviewModal.hooks';
import { reviewApiStore } from './ReviewModal.hooks';
import {
  useRatingStore,
  useContentStore,
  ReviewEditStore,
} from 'pages/WriteReviewPage/WriteReviewPage.hooks';
import { useParams, useNavigate } from 'react-router-dom';
import Pagination from 'components/Pagination';

const Review: React.FC = () => {
  const id = JSON.parse(localStorage.getItem('memberId'));
  const toggleReviewModal = reviewUseStore((state) => state.toggleReviewModal);
  const navigate = useNavigate();

  const { cafeId } = useParams<{ cafeId: string }>();

  const closeModal = () => {
    toggleReviewModal();
  };

  const { reviews, fetchReviews, deleteReview } = reviewApiStore();

  const handleDeleteReview = async (reviewId: number) => {
    await deleteReview(reviewId);
    fetchReviews();
    window.location.reload();
  };
  React.useEffect(() => {
    fetchReviews();
  }, []);

  const { setContent } = useContentStore();
  const { setRating } = useRatingStore();
  const { toggleEditing, getReviewId } = ReviewEditStore();

  const handleReviewEdit = (content, rate, id) => {
    setRating(rate);
    setContent(content);
    toggleEditing(true);
    getReviewId(id);

    navigate(`/writeReview/${cafeId}`);
  };

  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
              {id === reviews[index].writer.memberId && (
                <ReviewsEditContainer>
                  <ReviewsEditFont
                    onClick={() =>
                      handleReviewEdit(
                        reviews[index].content,
                        reviews[index].rate,
                        reviews[index].reviewId,
                      )
                    }
                  >
                    수정
                  </ReviewsEditFont>
                  <ReviewsEditFont>|</ReviewsEditFont>
                  <ReviewsEditFont
                    onClick={() => handleDeleteReview(reviews[index].reviewId)}
                  >
                    삭제
                  </ReviewsEditFont>
                </ReviewsEditContainer>
              )}
            </ReviewsBox>
          ))}
        </ReviewBoxContainer>
        <Pagination
          totalPage={5}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </ReviewModal>
      <ModalBackdrop onClick={closeModal}></ModalBackdrop>
    </>
  );
};

export default Review;
