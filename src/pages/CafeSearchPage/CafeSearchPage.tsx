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
} from './CafeSearchPage.style';
import { useFilter } from './CafeSearchPage.hooks';
import { drinkPrices, usageTimes } from './CafeSearchPage.type';
const CafeSearchPage: React.FC = () => {
  const {
    setArea,
    startTime,
    endTime,
    setStartTime,
    setEndTime,
    showFitter,
    setShowFitter,
    minBeveragePrice,
    maxTime,
    setMinBeveragePrice,
    setMaxTime,
    canStudy,
    setCanStudy,
  } = useFilter();

  const handleFilterButtonClick = () => {
    setShowFitter(!showFitter);
  };

  const handlePriceClick = (price: string) => {
    if (price === '무관') {
      setMinBeveragePrice('0');
    } else {
      setMinBeveragePrice(price);
    }
  };

  const handleTimeClick = (time: string) => {
    if (time === '무관') {
      setMaxTime('0');
    } else {
      setMaxTime(time);
    }
  };

  const handleAvailabilityClick = (availability: '가능' | '불가능') => {
    setCanStudy(availability);
  };

  const renderDrinkPriceOptions = () => {
    return drinkPrices.map((price, index) => (
      <Option
        key={index}
        onClick={() => handlePriceClick(price)}
        className={minBeveragePrice === price ? 'selected' : ''}
      >
        {price}
      </Option>
    ));
  };

  const renderUsageTimeOptions = () => {
    return usageTimes.map((time, index) => (
      <Option
        key={index}
        onClick={() => handleTimeClick(time)}
        className={maxTime === time ? 'selected' : ''}
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
              onChange={(e) => setArea(e.target.value)}
            />
            <PlaceImg src="/assets/place-icon.png" alt="검색 아이콘" />
          </InputContainer>
          <ButtonContainer>
            <ShortButton
              message="필터"
              color="white"
              onClick={handleFilterButtonClick}
            />
            <ShortButton message="검색" color="black" />
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
                    onClick={() => handleAvailabilityClick('가능')}
                    className={canStudy === '가능' ? 'selected' : ''}
                  >
                    가능
                  </Option>
                  <Option
                    onClick={() => handleAvailabilityClick('불가능')}
                    className={canStudy === '불가능' ? 'selected' : ''}
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
                    {[...Array(25)].map((_, index) => {
                      const hour =
                        index === 24 ? '24' : index.toString().padStart(2, '0');
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
                    {[...Array(25)].map((_, index) => {
                      const hour =
                        index === 24 ? '24' : index.toString().padStart(2, '0');
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

export default CafeSearchPage;
