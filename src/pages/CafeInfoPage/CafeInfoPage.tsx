import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Screen from 'components/Basic/Screen';
import Container from 'components/Basic/Container';
import {
  CafeProfileContainer,
  CafeImg,
  AddressFont,
  BusinessHoursContainer,
  BusinessHoursTitleContainer,
  TitleFont,
  CafeInfoContainer,
  CafeNameContainer,
  CafeNameFont,
  DayOfWeekFont,
  IsOpenContainer,
  Time,
  TimeContainer,
  InfoBox,
  InfoBoxContainer,
  AdressImg,
  KakaoImg,
  PhoneImg,
  ReviewsContainer,
  ReviewsBoxContainer,
  ReviewsBox,
  ReviewsUpContainer,
  ProfileImg,
  ReviewsUserContainer,
  RateContainer,
  StarImg,
  ReviewsContentContainer,
  StudyContainer,
  StudyBoxContainer,
  StudyBox,
  StudyName,
  StudyDateFont,
  IsEndTrue,
  StudyNameBox,
  IsEndFalse,
  MoreButton,
  NoContentContainer,
  NoContentText,
  HomePageImg,
  LongButtonContainer,
} from './CafeInfoPage.style';
import Review from 'components/ReviewModal';
import Study from 'components/StudyModal';
import LongButton from 'components/LongButton';
import { reviewUseStore } from 'components/ReviewModal/ReviewModal.hooks';
import { studyUseStore } from 'components/StudyModal/StudyModal.hooks';
import { useNavigate } from 'react-router-dom';
import { reviewApiStore } from 'components/ReviewModal/ReviewModal.hooks';

const CafeInfo: React.FC = () => {
  const isReviewModalOpen = reviewUseStore((state) => state.isReviewModalOpen);
  const toggleReviewModal = reviewUseStore((state) => state.toggleReviewModal);

  const isStudyModalOpen = studyUseStore((state) => state.isStudyModalOpen);
  const toggleStudyModal = studyUseStore((state) => state.toggleStudyModal);

  const navigate = useNavigate();

  const { reviews, fetchReviews } = reviewApiStore();

  React.useEffect(() => {
    fetchReviews();
  }, []);

  const api = {
    basicInfo: {
      id: 1,
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
      ],
      isOpen: true,
      sns: [
        {
          name: 'instargram',
          url: 'https://~~~',
        },
      ],
      phone: '010-1234-5678',
      minBeveragePrice: 3000,
      maxTime: 3,
      avgReviewRate: 4.1,
    },
    reviews: [
      {
        id: 1,
        writer: {
          id: 'hihi1122',
          name: '안뇽',
          thumbnailImg: 'https://~~',
        },
        rate: 4,
        content:
          '깔끔하고 친절해용!ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
      },
      {
        id: 1,
        writer: {
          id: 'hihi1122',
          name: '안뇽',
          thumbnailImg: 'https://~~',
        },
        rate: 4,
        content: '깔끔하고 친절해용!',
      },
      {
        id: 1,
        writer: {
          id: 'hihi1122',
          name: '안뇽',
          thumbnailImg: 'https://~~',
        },
        rate: 4,
        content: '깔끔하고 친절해용!',
      },
    ],
    meetings: [
      {
        cafeId: 1,
        id: 1,
        name: '알아서 공부하자',
        startDateTime: 'yyyy-MM-ddThh:mm:ss',
        endDateTime: 'yyyy-MM-ddThh:mm:ss',
        maxMemberCount: 7,
        nowMemberCount: 3,
        isEnd: true,
      },
      {
        cafeId: 2,
        id: 2,
        name: '코코모',
        startDateTime: 'yyyy-MM-ddThh:mm:ss',
        endDateTime: 'yyyy-MM-ddThh:mm:ss',
        maxMemberCount: 7,
        nowMemberCount: 7,
        isEnd: false,
      },
      {
        cafeId: 2,
        id: 2,
        name: '코코모',
        startDateTime: 'yyyy-MM-ddThh:mm:ss',
        endDateTime: 'yyyy-MM-ddThh:mm:ss',
        maxMemberCount: 7,
        nowMemberCount: 7,
        isEnd: false,
      },
    ],
    canMakeMeeting: [
      {
        startTime: '10:00',
        endTime: '11:00',
        maxMemberCount: 1,
      },
      {
        startTime: '11:00',
        endTime: '12:00',
        maxMemberCount: 3,
      },
    ],
  };

  const CreateGroup = () => {};

  return (
    <Screen>
      <Container>
        <CafeInfoContainer>
          <CafeProfileContainer>
            <CafeImg src="/assets/profile-image.png" alt="카페 프사" />
            <CafeNameContainer>
              <CafeNameFont>{api.basicInfo.name}</CafeNameFont>
              <AddressFont>{api.basicInfo.address}</AddressFont>
            </CafeNameContainer>
          </CafeProfileContainer>
          <BusinessHoursContainer>
            <BusinessHoursTitleContainer>
              <TitleFont>영업 시간</TitleFont>
              {api.basicInfo.isOpen && (
                <IsOpenContainer>영업중</IsOpenContainer>
              )}
            </BusinessHoursTitleContainer>
            {api.basicInfo.businessHours.map((item) => (
              <TimeContainer>
                <DayOfWeekFont>{item.day}요일</DayOfWeekFont>
                <Time>
                  {item.startTime}~{item.endTime}
                </Time>
              </TimeContainer>
            ))}
          </BusinessHoursContainer>
          <InfoBoxContainer>
            <TitleFont>매장 정보</TitleFont>
            <InfoBox>
              <AdressImg src="/assets/adress-icon.png" alt="주소 아이콘" />
              {api.basicInfo.address}
            </InfoBox>
            <InfoBox>
              <PhoneImg src="/assets/phone-icon.png" alt="전화 아이콘" />
              {api.basicInfo.phone}
            </InfoBox>
            <InfoBox>
              <HomePageImg
                src="/assets/home-page-icon.png"
                alt="인스타 아이콘"
              />
              {api.basicInfo.sns.map((item, index) => (
                <>
                  {api.basicInfo.sns[index].url}({api.basicInfo.sns[index].name}
                  )
                </>
              ))}
            </InfoBox>
            <InfoBox>
              <KakaoImg src="/assets/kakao-logo.png" alt="카카오 아이콘" />
              오픈채팅방 주소
            </InfoBox>
          </InfoBoxContainer>
          <ReviewsContainer>
            <TitleFont>
              평점
              <StarImg src="/assets/star-icon.png" alt="별 아이콘" />
              {api.basicInfo.avgReviewRate}
            </TitleFont>
            {reviews.length === 0 && (
              <NoContentContainer>
                <NoContentText>작성된 리뷰가 없습니다.</NoContentText>
              </NoContentContainer>
            )}
            <ReviewsBoxContainer>
              {reviews.slice(0, 2).map((review, index) => (
                <ReviewsBox key={index}>
                  <ReviewsUpContainer>
                    <ReviewsUserContainer>
                      <ProfileImg
                        src={reviews[index].writer.thumbnailImg}
                        alt="프사"
                      />
                      {reviews[index].writer.name}
                    </ReviewsUserContainer>
                    <RateContainer>
                      {[...Array(reviews[index].rate)].map((_, i) => (
                        <StarImg
                          key={i}
                          src="/assets/star-icon.png"
                          alt="별 아이콘"
                        />
                      ))}
                    </RateContainer>
                  </ReviewsUpContainer>
                  <ReviewsContentContainer>
                    {review.content}
                  </ReviewsContentContainer>
                </ReviewsBox>
              ))}
            </ReviewsBoxContainer>
            {reviews.length > 2 && (
              <MoreButton onClick={toggleReviewModal}>
                {reviews.length - 2}건 더보기
              </MoreButton>
            )}
          </ReviewsContainer>
          <StudyContainer>
            <TitleFont>카공 그룹</TitleFont>
            {api.meetings.length === 0 && (
              <NoContentContainer>
                <NoContentText>생성된 카공 모임이 없습니다.</NoContentText>
              </NoContentContainer>
            )}
            <StudyBoxContainer>
              {api.meetings.slice(0, 2).map((meeting, index) => (
                <StudyBox key={index}>
                  <StudyNameBox>
                    <StudyName>{meeting.name}</StudyName>
                    {meeting.isEnd ? (
                      <>
                        <IsEndTrue>
                          {meeting.nowMemberCount}/{meeting.maxMemberCount}
                        </IsEndTrue>
                        <IsEndTrue>모집중</IsEndTrue>
                      </>
                    ) : (
                      <>
                        <IsEndFalse>
                          {meeting.nowMemberCount}/{meeting.maxMemberCount}
                        </IsEndFalse>
                        <IsEndFalse>모집 마감</IsEndFalse>
                      </>
                    )}
                  </StudyNameBox>
                  <StudyDateFont>
                    {meeting.startDateTime}~{meeting.endDateTime}
                  </StudyDateFont>
                </StudyBox>
              ))}
            </StudyBoxContainer>
            {api.meetings.length > 2 && (
              <MoreButton onClick={toggleStudyModal}>
                {api.meetings.length - 2}건 더보기
              </MoreButton>
            )}
          </StudyContainer>
          <LongButtonContainer>
            <LongButton
              message="카공 그룹 생성하기"
              color="black"
              onClick={CreateGroup}
            />
            <LongButton
              message="리뷰 작성하기"
              color="red"
              onClick={() => {
                navigate('/writeReview');
              }}
            />
          </LongButtonContainer>
        </CafeInfoContainer>
      </Container>
      <Sidebar buttonColors={['white', ,]} />
      <Header />
      {isReviewModalOpen && <Review />}
      {isStudyModalOpen && <Study />}
    </Screen>
  );
};

export default CafeInfo;
