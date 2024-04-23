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
} from './WriteReviewPage.hooks';
import { useNavigate } from 'react-router-dom';

const WriteReview: React.FC = () => {
  const { content, setContent } = useContentStore();
  const maxContentLength = 200;
  const cancel = () => {
    window.history.back();
  };
  const { rating, setRating } = useRatingStore();
  const handleRatingClick = (newRating: number) => {
    if (newRating === rating) {
      setRating(0);
    } else {
      setRating(newRating);
    }
  };

  const handlePostReview = () => {
    postReview();
    Navigate('/cafeInfo');
  };
  const Navigate = useNavigate();

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
            <ShortButton
              message="작성하기"
              color="black"
              onClick={handlePostReview}
            />
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
