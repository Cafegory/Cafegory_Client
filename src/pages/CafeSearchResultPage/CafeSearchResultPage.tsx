import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Screen from '../../components/Basic/Screen';
import Container from '../../components/Basic/Container';
import {
  AreaTextFont,
  InputContainer,
  InputField,
  PlaceImg,
  ResearchContainer,
  ResultTextFont,
  TitleTextContainer,
} from './CafeSearchResultPage.style';
import ShortButton from 'components/ShortButton';

const CafeSearchResult: React.FC = () => {
  const AREA = '역삼동';

  return (
    <Screen>
      <Container>
        <TitleTextContainer>
          <AreaTextFont>{AREA}</AreaTextFont>
          <ResultTextFont>기반 카페 검색 결과</ResultTextFont>
        </TitleTextContainer>
        <ResearchContainer>
          <InputContainer>
            <InputField placeholder={AREA}></InputField>
            <PlaceImg src="/assets/place-icon.png"></PlaceImg>
          </InputContainer>
          <ShortButton message="필터" color="white" />
          <ShortButton message="검색" color="black" />
        </ResearchContainer>
      </Container>
      <Sidebar buttonColors={['white', ,]} />
      <Header />
    </Screen>
  );
};

export default CafeSearchResult;
