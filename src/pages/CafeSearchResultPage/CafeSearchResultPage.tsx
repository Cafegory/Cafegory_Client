import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import {
  AreaTextFont,
  Container,
  InputContainer,
  InputField,
  MainScreen,
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
} from './CafeSearchResultPage.style';
import ShortButton from 'components/ShortButton';

const CafeSearchResult: React.FC = () => {
  const AREA = '역삼동';
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

  return (
    <MainScreen>
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
    </MainScreen>
  );
};

export default CafeSearchResult;
