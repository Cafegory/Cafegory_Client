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
  CafeList,
  List,
  CafeImg,
  Name,
  Detail,
  Adress,
  BusinessHours,
  MinBeveragePrice,
  IsOpenImg,
} from './CafeMeetingSearchResultPage.style';
import ShortButton from 'components/ShortButton';

const CafeMeetingSearchResultPage: React.FC = () => {
  const AREA = '역삼동';
  const API: any = [
    {
      cafeId: 1,
      id: 1,
      name: '알아서 공부하자',
      startDateTime: 'yyyy-MM-ddThh:mm:ss',
      endDateTime: 'yyyy-MM-ddThh:mm:ss',
      maxMemberCount: 7,
      nowMemberCount: 3,
      canTalk: true,
      canJoin: true,
      isEnd: false,
    },
    {
      cafeId: 2,
      id: 1,
      name: '알아서 공부하자',
      startDateTime: 'yyyy-MM-ddThh:mm:ss',
      endDateTime: 'yyyy-MM-ddThh:mm:ss',
      maxMemberCount: 7,
      nowMemberCount: 3,
      canTalk: true,
      canJoin: true,
      isEnd: false,
    },
    {
      cafeId: 3,
      id: 1,
      name: '알아서 공부하자',
      startDateTime: 'yyyy-MM-ddThh:mm:ss',
      endDateTime: 'yyyy-MM-ddThh:mm:ss',
      maxMemberCount: 7,
      nowMemberCount: 3,
      canTalk: true,
      canJoin: true,
      isEnd: false,
    },
  ];

  return (
    <Screen>
      <Container>
        <TitleTextContainer>
          <AreaTextFont>{AREA}</AreaTextFont>
          <ResultTextFont>기반 카공 모임 검색 결과</ResultTextFont>
        </TitleTextContainer>
        <ResearchContainer></ResearchContainer>
        <CafeList>
          {API.map((study) => (
            <List>
              <Detail>
                <Name>{study.name}</Name>
                <Adress>서울 강남구 역삼동 스타벅스 강남R점</Adress>
                <BusinessHours>매주 주말 09:00~18:00</BusinessHours>
                <MinBeveragePrice>상세 정보 ▷</MinBeveragePrice>
              </Detail>
            </List>
          ))}
        </CafeList>
      </Container>
      <Sidebar buttonColors={['white', ,]} />
      <Header />
    </Screen>
  );
};

export default CafeMeetingSearchResultPage;
