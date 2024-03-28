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
} from './WriteReviewPage.style';
import { useRatingStore } from './WriteReviewPage.hooks';

const WriteReview: React.FC = () => {
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
          <ReviewContent maxLength={maxContentLength}></ReviewContent>
          <ButtonContainer>
            <ShortButton message="작성하기" color="black" />
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
