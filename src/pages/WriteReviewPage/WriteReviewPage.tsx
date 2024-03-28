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

const WriteReview: React.FC = () => {
  const maxContentLength = 200;
  const cancel = () => {
    window.history.back();
  };

  return (
    <Screen>
      <Container>
        <WriteReviewContainer>
          <StarContainer>
            <StarImg src="/assets/gray-star-icon.png"></StarImg>
            <StarImg src="/assets/gray-star-icon.png"></StarImg>
            <StarImg src="/assets/gray-star-icon.png"></StarImg>
            <StarImg src="/assets/gray-star-icon.png"></StarImg>
            <StarImg src="/assets/gray-star-icon.png"></StarImg>
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
