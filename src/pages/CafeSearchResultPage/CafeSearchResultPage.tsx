import React, { useEffect } from 'react';
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
  CafeSearch,
  FitterContainer,
  TitleFont,
  SideFont,
  ButtonContainer,
  FitterTitle,
  ChooseOption,
  StudyAvailability,
  ChooseFont,
  Choose,
  Option,
  SelectContainer as StyledSelectContainer,
} from './CafeSearchResultPage.style';
import ShortButton from 'components/ShortButton';
import {
  useFilter,
  updateContent,
  search,
  useOption,
} from './CafeSearchResultPage.hooks';

const CafeSearchResult: React.FC = () => {
  const AREA = '역삼동';

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

  const API: any = [
    {
      name: '로빈카페',
      address: '경기도 용인시 수지구 풍덕천로 52 ...',
      businessHours: [
        {
          day: '월',
          startTime: '09:00',
          endTime: '22:00',
        },
        {
          day: '화',
          startTime: '09:00',
          endTime: '22:00',
        },
        {
          day: '수',
          startTime: '09:00',
          endTime: '22:00',
        },
        {
          day: '목',
          startTime: '09:00',
          endTime: '22:00',
        },
        {
          day: '금',
          startTime: '09:00',
          endTime: '22:00',
        },
        {
          day: '토',
          startTime: '09:00',
          endTime: '22:00',
        },
        {
          day: '일',
          startTime: '09:00',
          endTime: '22:00',
        },
      ],
      isOpen: true,
      sns: [
        {
          name: 'instagram',
          url: 'https://~~~',
        },
      ],
      phone: '010-1234-5678',
      minBeveragePrice: 3000,
      maxTime: 3,
      avgReviewRate: 4.1,
    },
    {
      name: '카페 아메리카노',
      address: '서울특별시 강남구 역삼동 123-45',
      businessHours: [
        {
          day: '월',
          startTime: '08:00',
          endTime: '21:00',
        },
        {
          day: '화',
          startTime: '08:00',
          endTime: '21:00',
        },
        {
          day: '수',
          startTime: '08:00',
          endTime: '21:00',
        },
        {
          day: '목',
          startTime: '08:00',
          endTime: '21:00',
        },
        {
          day: '금',
          startTime: '08:00',
          endTime: '21:00',
        },
        {
          day: '토',
          startTime: '08:00',
          endTime: '21:00',
        },
        {
          day: '일',
          startTime: '09:00',
          endTime: '20:00',
        },
      ],
      isOpen: true,
      sns: [
        {
          name: 'facebook',
          url: 'https://~~~',
        },
      ],
      phone: '010-9876-5432',
      minBeveragePrice: 3500,
      maxTime: 2,
      avgReviewRate: 4.5,
    },
    {
      name: '알베르',
      address: '부산광역시 해운대구 우동 456-78',
      businessHours: [
        {
          day: '월',
          startTime: '10:00',
          endTime: '20:00',
        },
        {
          day: '화',
          startTime: '10:00',
          endTime: '20:00',
        },
        {
          day: '수',
          startTime: '10:00',
          endTime: '20:00',
        },
        {
          day: '목',
          startTime: '10:00',
          endTime: '20:00',
        },
        {
          day: '금',
          startTime: '10:00',
          endTime: '20:00',
        },
        {
          day: '토',
          startTime: '12:00',
          endTime: '18:00',
        },
        {
          day: '일',
          startTime: '12:00',
          endTime: '18:00',
        },
      ],
      isOpen: false,
      sns: [
        {
          name: 'twitter',
          url: 'https://~~~',
        },
      ],
      phone: '010-5555-1234',
      minBeveragePrice: 3200,
      maxTime: 1,
      avgReviewRate: 4.0,
    },
  ];

  const formatBusinessHours = (businessHours: any[]) => {
    const dayHours: { [key: string]: string[] } = {};

    businessHours.forEach((hours) => {
      const timeRange = `${hours.startTime}-${hours.endTime}`;
      if (!dayHours[timeRange]) {
        dayHours[timeRange] = [];
      }
      dayHours[timeRange].push(hours.day);
    });

    const allSameHours = Object.keys(dayHours).length === 1;

    if (allSameHours) {
      const [timeRange] = Object.keys(dayHours);
      return `매일 ${timeRange}`;
    } else {
      const formattedHours = Object.keys(dayHours)
        .map((timeRange) => {
          const days = dayHours[timeRange].join(', ');
          return `${days} ${timeRange}`;
        })
        .join('\n');

      return formattedHours;
    }
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
    setShowFitter(false);
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
        <TitleTextContainer>
          <AreaTextFont>{AREA}</AreaTextFont>
          <ResultTextFont>기반 카페 검색 결과</ResultTextFont>
        </TitleTextContainer>
        <ResearchContainer>
          <InputContainer>
            <InputField placeholder={AREA}></InputField>
            <PlaceImg src="/assets/place-icon.png"></PlaceImg>
          </InputContainer>
          <ShortButton
            message="필터"
            color="white"
            onClick={handleFilterButtonClick}
          />
          <ShortButton message="검색" color="black" />
        </ResearchContainer>
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
        <CafeList>
          {API.map((cafe) => (
            <List>
              {cafe.isOpen ? (
                <IsOpenImg src="/assets/isOpen.png" alt="영업중" />
              ) : null}
              <CafeImg src="/assets/cafeSearch-result.png" alt="카페로고" />
              <Detail>
                <Name>{cafe.name}</Name>
                <Adress>{cafe.address}</Adress>
                <BusinessHours>
                  {formatBusinessHours(cafe.businessHours)}
                </BusinessHours>
                <MinBeveragePrice>
                  가장 저렴함 음료 {cafe.minBeveragePrice}원
                </MinBeveragePrice>
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

export default CafeSearchResult;
