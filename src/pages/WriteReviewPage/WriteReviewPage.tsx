import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Screen from 'components/Basic/Screen';
import Container from 'components/Basic/Container';
import ShortButton from 'components/ShortButton';
import {
  ButtonContainer,
  ReviewContent,
  StarContainer,
  StarImg,
  WriteReviewContainer,
  AlertFont,
} from './WriteReviewPage.style';
import {
  useRatingStore,
  useContentStore,
  postReview,
  patchReview,
  ReviewEditStore,
} from './WriteReviewPage.hooks';
import { useParams, useNavigate } from 'react-router-dom';

const WriteReview: React.FC = () => {
  const navigate = useNavigate();
  const { cafeId: routeCafeId } = useParams();
  const { content, setContent } = useContentStore();
  const maxContentLength = 200;
  const cancel = () => {
    const redirectUrl = localStorage.getItem('goBackUrl') || '/';
    navigate(redirectUrl);
  };
  const { rating, setRating } = useRatingStore();
  const { toggleEditing } = ReviewEditStore();

  const handleRatingClick = (newRating: number) => {
    if (newRating === rating) {
      setRating(0);
    } else {
      setRating(newRating);
    }
  };

  const handlePostReview = () => {
    postReview(routeCafeId);
    Navigate(`/cafeInfo/${routeCafeId}`);
    window.location.reload();
    setRating(0);
    setContent('');
  };

  const handleEditReview = () => {
    patchReview();
    setRating(0);
    setContent('');
    toggleEditing(false);
    Navigate(`/cafeInfo/${routeCafeId}`);
    window.location.reload();
  };
  const Navigate = useNavigate();
  const { isEditing } = ReviewEditStore();

  return (
    <Screen>
      <Container>
        <WriteReviewContainer>
          <StarContainer>
            {[1, 2, 3, 4, 5].map((value) => (
              <StarImg
                key={value}
                onClick={() => handleRatingClick(value)}
                src={
                  value <= rating
                    ? '/assets/star-icon.png'
                    : '/assets/gray-star-icon.png'
                }
              ></StarImg>
            ))}
          </StarContainer>
          <ReviewContent
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={maxContentLength}
          ></ReviewContent>
          {content.length >= maxContentLength && (
            <AlertFont>* {maxContentLength}글자 이하로 작성해주세요.</AlertFont>
          )}
          <ButtonContainer>
            {!isEditing && (
              <ShortButton
                message="작성하기"
                color="black"
                onClick={handlePostReview}
              />
            )}
            {isEditing && (
              <ShortButton
                message="수정하기"
                color="black"
                onClick={handleEditReview}
              />
            )}
            <ShortButton message="취소" color="white" onClick={cancel} />
          </ButtonContainer>
        </WriteReviewContainer>
      </Container>
      <Sidebar buttonColors={['white', ,]} />
      <Header />
    </Screen>
  );
};

export default WriteReview;
