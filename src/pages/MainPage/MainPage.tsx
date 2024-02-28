import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import ShortButton from 'components/ShortButton';

import {
  MainScreen,
  CafeSearch,
  FitterContainer,
  SearchContainer,
  TitleFont,
  SideFont,
  InputContainer,
  ButtonContainer,
  InputField,
  PlaceImg,
  FitterTitle,
  ChooseOption,
  StudyAvailability,
  ChooseFont,
  Choose,
  Option,
} from './MainPage.style';

const Main: React.FC = () => {
  return (
    <MainScreen>
      <Sidebar buttonColors={['white', ,]} />
      <Header />
      <SearchContainer>
        <CafeSearch>
          <TitleFont>카페 검색</TitleFont>
          <SideFont>행정동 기반으로 검색합니다.</SideFont>
          <InputContainer>
            <InputField
              type="text"
              placeholder="검색어를 입력하세요 (예: 역삼동, 서초동)"
            />
            <PlaceImg src="/assets/place-icon.png" alt="검색 아이콘" />
          </InputContainer>
          <ButtonContainer>
            <ShortButton message="필터" color="white" />
            <ShortButton message="검색" color="black" />
          </ButtonContainer>
        </CafeSearch>
        <FitterContainer>
          <FitterTitle>필터</FitterTitle>
          <ChooseOption>
            <StudyAvailability>
              <ChooseFont>카페에서 공부?</ChooseFont>
              <Choose>
                <Option>가능</Option>
                <Option>불가</Option>
              </Choose>
            </StudyAvailability>
            <StudyAvailability>
              <ChooseFont>영업 시간</ChooseFont>
              <Choose>
                <Option>09:00</Option>
                부터
                <Option>18:00</Option>
                까지
              </Choose>
            </StudyAvailability>
            <StudyAvailability>
              <ChooseFont>음료 최저가</ChooseFont>
              <Choose>
                <Option>무관</Option>
                <Option>1,000원</Option>
                <Option>2,000원</Option>
                <Option>3,000원</Option>
                <Option>4,000원</Option>
                <Option>5,000원</Option>
                <Option>10,000원 이상</Option>
              </Choose>
            </StudyAvailability>
            <StudyAvailability>
              <ChooseFont>최대 이용 가능 시간</ChooseFont>
              <Choose>
                <Option>무관</Option>
                <Option>1시간</Option>
                <Option>2시간</Option>
                <Option>3시간</Option>
                <Option>4시간</Option>
                <Option>5시간</Option>
                <Option>6시간 이상</Option>
              </Choose>
            </StudyAvailability>
          </ChooseOption>
          <ShortButton message="적용" color="black" />
        </FitterContainer>
      </SearchContainer>
    </MainScreen>
  );
};

export default Main;
