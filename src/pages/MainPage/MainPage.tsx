// MainPage.tsx
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
  SelectContainer as StyledSelectContainer,
} from './MainPage.style';
import { useFilter } from './MainPage.hooks';

const drinkPrices = [
  '무관',
  '1,000원',
  '2,000원',
  '3,000원',
  '4,000원',
  '5,000원',
  '10,000원 이상',
];

const usageTimes = [
  '무관',
  '1시간',
  '2시간',
  '3시간',
  '4시간',
  '5시간',
  '6시간 이상',
];

const Main: React.FC = () => {
  const {
    studyAvailability,
    setStudyAvailability,
    drinkPrice,
    setDrinkPrice,
    maxUsageTime,
    setMaxUsageTime,
    setSearchKeyword,
    searchKeyword,
    startTime,
    endTime,
    setStartTime,
    setEndTime,
    showFitter,
    setShowFitter,
  } = useFilter();

  const handleSearch = () => {
    console.log('검색어:', searchKeyword);
  };

  const handleFilterButtonClick = () => {
    setShowFitter(!showFitter);
  };

  const renderDrinkPriceOptions = () => {
    return drinkPrices.map((price, index) => (
      <Option
        key={index}
        onClick={() => {
          console.log(`${price} 클릭됨`);
          setDrinkPrice(price);
        }}
        active={drinkPrice === price}
      >
        {price}
      </Option>
    ));
  };

  const renderUsageTimeOptions = () => {
    return usageTimes.map((time, index) => (
      <Option
        key={index}
        onClick={() => {
          console.log(`${time} 클릭됨`);
          setMaxUsageTime(time);
        }}
        active={maxUsageTime === time}
      >
        {time}
      </Option>
    ));
  };

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
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <PlaceImg src="/assets/place-icon.png" alt="검색 아이콘" />
          </InputContainer>
          <ButtonContainer>
            <ShortButton
              message="필터"
              color="white"
              onClick={handleFilterButtonClick}
            />
            <ShortButton message="검색" color="black" onClick={handleSearch} />
          </ButtonContainer>
        </CafeSearch>
        {showFitter && (
          <FitterContainer>
            <FitterTitle>필터</FitterTitle>
            <ChooseOption>
              <StudyAvailability>
                <ChooseFont>카페에서 공부?</ChooseFont>
                <Choose>
                  <Option
                    onClick={() => {
                      console.log('가능 옵션 클릭됨');
                      setStudyAvailability('가능');
                    }}
                    active={studyAvailability === '가능'}
                  >
                    가능
                  </Option>
                  <Option
                    onClick={() => {
                      console.log('불가능 옵션 클릭됨');
                      setStudyAvailability('불가능');
                    }}
                    active={studyAvailability === '불가능'}
                  >
                    불가능
                  </Option>
                </Choose>
              </StudyAvailability>
              <StudyAvailability>
                <ChooseFont>영업 시간</ChooseFont>
                <Choose>
                  <StyledSelectContainer
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                  >
                    {[...Array(24)].map((_, index) => {
                      const hour = index.toString().padStart(2, '0');
                      return (
                        <option
                          key={index}
                          value={`${hour}:00`}
                        >{`${hour}:00`}</option>
                      );
                    })}
                  </StyledSelectContainer>
                  부터
                  <StyledSelectContainer
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                  >
                    {[...Array(24)].map((_, index) => {
                      const hour = index.toString().padStart(2, '0');
                      return (
                        <option
                          key={index}
                          value={`${hour}:00`}
                        >{`${hour}:00`}</option>
                      );
                    })}
                  </StyledSelectContainer>
                  까지
                </Choose>
              </StudyAvailability>
              <StudyAvailability>
                <ChooseFont>음료 최저가</ChooseFont>
                <Choose>{renderDrinkPriceOptions()}</Choose>
              </StudyAvailability>
              <StudyAvailability>
                <ChooseFont>최대 이용 가능 시간</ChooseFont>
                <Choose>{renderUsageTimeOptions()}</Choose>
              </StudyAvailability>
            </ChooseOption>
            <ShortButton message="적용" color="black" />
          </FitterContainer>
        )}
      </SearchContainer>
    </MainScreen>
  );
};

export default Main;
