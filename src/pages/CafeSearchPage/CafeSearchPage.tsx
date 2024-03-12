import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import ShortButton from 'components/ShortButton';
import { useNavigate } from 'react-router-dom';
import {
  CafeSearch,
  FitterContainer,
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
import Screen from '../../components/Basic/Screen';
import Container from 'components/Basic/Container';

import {
  useFilter,
  updateContent,
  search,
  useOption,
} from './CafeSearchPage.hooks';

const CafeSearchPage: React.FC = () => {
  const navigate = useNavigate();

  const { showFitter, setShowFitter } = useFilter();
  const {
    canStudy,
    setCanStudy,
    canStudyState,
    setCanStudyState,
    startTime,
    setStartTime,
    startTimeState,
    setStartTimeState,
    endTime,
    setEndTime,
    endTimeState,
    setEndTimeState,
    minBeveragePrice,
    setMinBeveragePrice,
    minBeveragePriceState,
    setMinBeveragePriceState,
    maxTime,
    setMaxTime,
    maxTimeState,
    setMaxTimeState,
  } = updateContent();
  const { area, setArea } = search();
  const {
    isSelectedCanStudy,
    setSelectedCanStudy,
    isSelectedMinBeveragePrice,
    setSelectedMinBeveragePrice,
    isSelectedMaxTime,
    setSelectedMaxTime,
  } = useOption();

  const handleFilterButtonClick = () => {
    setShowFitter(!showFitter);
  };

  const NOT_SPECIFIED = '무관';
  const Possibility = '가능';
  const Impossibility = '불가능';

  const drinkPrices = [
    NOT_SPECIFIED,
    '1,000원',
    '2,000원',
    '3,000원',
    '4,000원',
    '5,000원',
    '10,000원 이상',
  ];

  const usageTimes = [
    NOT_SPECIFIED,
    '1시간',
    '2시간',
    '3시간',
    '4시간',
    '5시간',
    '6시간 이상',
  ];

  const renderDrinkPriceOptions = () => {
    return drinkPrices.map((price, index) => (
      <Option
        key={index}
        onClick={() => {
          setSelectedMinBeveragePrice(index);
          setMinBeveragePriceState(index);
        }}
        style={{
          backgroundColor:
            isSelectedMinBeveragePrice === index
              ? 'rgba(0, 0, 0, 0.2)'
              : 'rgba(0, 0, 0, 0.05)',
        }}
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
          setSelectedMaxTime(index);
          setMaxTimeState(index);
        }}
        style={{
          backgroundColor:
            isSelectedMaxTime === index
              ? 'rgba(0, 0, 0, 0.2)'
              : 'rgba(0, 0, 0, 0.05)',
        }}
      >
        {time}
      </Option>
    ));
  };

  const handleCanTalkOptionClick = (value: 'TRUE' | 'FALSE') => {
    setSelectedCanStudy(value);
  };

  const ApplyFilter = () => {
    setCanStudy(canStudyState);
    setStartTime(startTimeState);
    setEndTime(endTimeState);
    setMinBeveragePrice(minBeveragePriceState);
    setMaxTime(maxTimeState);
  };

  useEffect(() => {
    console.log('시작 출력:', startTime);
    console.log('끝 출력:', endTime);
    console.log('가장 저렴한 음료:', minBeveragePrice);
    console.log('최대 이용 시간:', maxTime);
  }, [startTime, endTime, minBeveragePrice, maxTime]);

  return (
    <Screen>
      <Container>
        <CafeSearch>
          <TitleFont>카페 검색</TitleFont>
          <SideFont>행정동 기반으로 검색합니다.</SideFont>
          <InputContainer>
            <InputField
              type="text"
              placeholder="검색어를 입력하세요 (예: 역삼동, 서초동)"
              value={area}
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
            <ShortButton
              message="검색"
              color="black"
              onClick={() => {
                navigate('/cafeSearchResult');
              }}
            />
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
                      handleCanTalkOptionClick('TRUE');
                      setCanStudyState(true);
                    }}
                    style={{
                      backgroundColor:
                        isSelectedCanStudy === 'TRUE'
                          ? 'rgba(0, 0, 0, 0.2)'
                          : 'rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    {Possibility}
                  </Option>
                  <Option
                    onClick={() => {
                      handleCanTalkOptionClick('FALSE');
                      setCanStudyState(false);
                    }}
                    style={{
                      backgroundColor:
                        isSelectedCanStudy === 'FALSE'
                          ? 'rgba(0, 0, 0, 0.2)'
                          : 'rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    {Impossibility}
                  </Option>
                </Choose>
              </StudyAvailability>
              <StudyAvailability>
                <ChooseFont>영업 시간</ChooseFont>
                <Choose>
                  <StyledSelectContainer
                    value={startTimeState}
                    onChange={(e) =>
                      setStartTimeState(parseInt(e.target.value))
                    }
                  >
                    {[...Array(25)].map((_, index) => {
                      const hour =
                        index === 24 ? '24' : index.toString().padStart(2, '0');
                      return (
                        <option
                          key={index}
                          value={index}
                        >{`${hour}:00`}</option>
                      );
                    })}
                  </StyledSelectContainer>
                  부터
                  <StyledSelectContainer
                    value={endTimeState}
                    onChange={(e) => setEndTimeState(parseInt(e.target.value))}
                  >
                    {[...Array(25)].map((_, index) => {
                      const hour =
                        index === 24 ? '24' : index.toString().padStart(2, '0');
                      return (
                        <option
                          key={index}
                          value={index}
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
            <ShortButton message="적용" color="black" onClick={ApplyFilter} />
          </FitterContainer>
        )}
      </Container>
      <Sidebar buttonColors={['white', ,]} />
      <Header />
    </Screen>
  );
};

export default CafeSearchPage;
