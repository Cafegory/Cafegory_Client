import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Screen from 'components/Basic/Screen';
import Container from 'components/Basic/Container';
import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from 'components/DeleteModal/DeleteModal.hooks';
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
  HomePageLinkFont,
  AvgReviewRate,
  CafeStudyPossibleContainer,
  Possible,
  ReviewsDownContainer,
  ReviewsDownFont,
} from './CafeInfoPage.style';
import Review from 'components/ReviewModal';
import Study from 'components/StudyModal';
import LongButton from 'components/LongButton';
import { reviewUseStore } from 'components/ReviewModal/ReviewModal.hooks';
import { studyUseStore } from 'components/StudyModal/StudyModal.hooks';
import { reviewApiStore } from 'components/ReviewModal/ReviewModal.hooks';
import { cafeInfoApiStore } from './CafeInfo.hooks';
import {
  useContentStore,
  useRatingStore,
  ReviewEditStore,
} from 'pages/WriteReviewPage/WriteReviewPage.hooks';
import Delete from 'components/DeleteModal';

const CafeInfo: React.FC = () => {
  const isReviewModalOpen = reviewUseStore((state) => state.isReviewModalOpen);
  const toggleReviewModal = reviewUseStore((state) => state.toggleReviewModal);

  const isStudyModalOpen = studyUseStore((state) => state.isStudyModalOpen);
  const toggleStudyModal = studyUseStore((state) => state.toggleStudyModal);

  const navigate = useNavigate();

  const { reviews, fetchReviews, deleteReview } = reviewApiStore();

  React.useEffect(() => {
    fetchReviews(Number(cafeId), 1, 2);
  }, []);

  const { info, fetchInfo } = cafeInfoApiStore();

  const { cafeId } = useParams<{ cafeId: string }>();

  React.useEffect(() => {
    fetchInfo(cafeId);
  }, [cafeId]);

  const CreateGroup = () => {
    const goBackPath = window.location.pathname;
    localStorage.setItem('goBackUrl', goBackPath);
    navigate(`/studyRecruiting/${cafeId}`);
  };

  const review = () => {
    const goBackPath = window.location.pathname;
    localStorage.setItem('goBackUrl', goBackPath);
    navigate(`/writeReview/${cafeId}`);
  };

  const handleMoveHomePage = (link) => {
    window.location.href = link;
  };

  const formatDate = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const year = dateTime.getFullYear();
    const month = String(dateTime.getMonth() + 1).padStart(2, '0');
    const day = String(dateTime.getDate()).padStart(2, '0');
    const hour = String(dateTime.getHours()).padStart(2, '0');
    const minute = String(dateTime.getMinutes()).padStart(2, '0');

    return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;
  };

  const id = JSON.parse(localStorage.getItem('memberId'));

  const { setContent } = useContentStore();
  const { setRating } = useRatingStore();
  const { toggleEditing, getReviewId } = ReviewEditStore();

  const handleReviewEdit = (content, rate, id) => {
    setRating(rate);
    setContent(content);
    toggleEditing(true);
    getReviewId(id);

    navigate(`/writeReview/${cafeId}`);
  };

  const memberId = localStorage.getItem('memberId');

  const { toggleDeleteModal, setReviewId, reviewId } = useStore();

  const deleteModalOpen = (id) => {
    toggleDeleteModal();
    setReviewId(id);
  };

  const isDeleteModalOpen = useStore((state) => state.isDeleteModalOpen);

  return (
    <Screen>
      <Container>
        <CafeInfoContainer>
          <CafeProfileContainer>
            <CafeNameContainer>
              <CafeNameFont>{info.basicInfo.name}</CafeNameFont>
              <AddressFont>{info.basicInfo.address}</AddressFont>
            </CafeNameContainer>
          </CafeProfileContainer>
          <BusinessHoursContainer>
            <BusinessHoursTitleContainer>
              <TitleFont>영업 시간</TitleFont>
              {info.basicInfo.isOpen && (
                <IsOpenContainer>영업중</IsOpenContainer>
              )}
            </BusinessHoursTitleContainer>
            {info.basicInfo.businessHours.map((item) => (
              <TimeContainer>
                <DayOfWeekFont>{item.day}</DayOfWeekFont>
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
              {info.basicInfo.address}
            </InfoBox>
            <InfoBox>
              <PhoneImg src="/assets/phone-icon.png" alt="전화 아이콘" />
              {info.basicInfo.phone}
            </InfoBox>
            {info.basicInfo.sns.length !== 0 && (
              <InfoBox>
                <HomePageImg
                  src="/assets/home-page-icon.png"
                  alt="홈페이지 아이콘"
                />
                {info.basicInfo.sns.map((item, index) => (
                  <HomePageLinkFont
                    onClick={() =>
                      handleMoveHomePage(info.basicInfo.sns[index].url)
                    }
                  >
                    {info.basicInfo.sns[index].name}
                  </HomePageLinkFont>
                ))}
              </InfoBox>
            )}
          </InfoBoxContainer>
          <ReviewsContainer>
            <TitleFont>
              평점
              <StarImg src="/assets/star-icon.png" alt="별 아이콘" />
              <AvgReviewRate>
                {info.basicInfo.avgReviewRate.toFixed(2)}
              </AvgReviewRate>
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
                    {reviews[index].content}
                  </ReviewsContentContainer>
                  {id === reviews[index].writer.memberId && (
                    <ReviewsDownContainer>
                      <ReviewsDownFont
                        onClick={() =>
                          handleReviewEdit(
                            reviews[index].content,
                            reviews[index].rate,
                            reviews[index].reviewId,
                          )
                        }
                      >
                        수정
                      </ReviewsDownFont>
                      <ReviewsDownFont>|</ReviewsDownFont>
                      <ReviewsDownFont
                        onClick={() => deleteModalOpen(reviews[index].reviewId)}
                      >
                        삭제
                      </ReviewsDownFont>
                    </ReviewsDownContainer>
                  )}
                </ReviewsBox>
              ))}
            </ReviewsBoxContainer>
            {/* 문제여기 */}
            {info.totalElementsOfReview > 2 && (
              <MoreButton onClick={toggleReviewModal}>
                {info.totalElementsOfReview - 2}건 더보기
              </MoreButton>
            )}
          </ReviewsContainer>
          <StudyContainer>
            <TitleFont>카공 그룹</TitleFont>
            {memberId === null && (
              <NoContentContainer>
                <NoContentText>
                  로그인 후 서비스를 이용하실 수 있습니다.
                </NoContentText>
              </NoContentContainer>
            )}
            {info.basicInfo.canStudy &&
              memberId !== null &&
              info.meetings.length === 0 && (
                <NoContentContainer>
                  <NoContentText>생성된 카공 모임이 없습니다.</NoContentText>
                </NoContentContainer>
              )}
            {!info.basicInfo.canStudy && (
              <NoContentContainer>
                <NoContentText>카공 불가능한 카페입니다.</NoContentText>
              </NoContentContainer>
            )}
            <StudyBoxContainer>
              {info.meetings.slice(0, 2).map((meeting, index) => (
                <StudyBox
                  key={index}
                  onClick={() => {
                    navigate(`/cafeMeetingInfo/${meeting.studyOnceId}`);
                  }}
                >
                  <StudyNameBox>
                    <StudyName>{meeting.name}</StudyName>
                    {!meeting.end ? (
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
                    {formatDate(meeting.startDateTime)} ~{' '}
                    {formatDate(meeting.endDateTime)}
                  </StudyDateFont>
                </StudyBox>
              ))}
            </StudyBoxContainer>
            {info.meetings.length > 2 && (
              <MoreButton onClick={toggleStudyModal}>
                {info.meetings.length - 2}건 더보기
              </MoreButton>
            )}
          </StudyContainer>
          <CafeStudyPossibleContainer>
            <TitleFont>카공 가능여부</TitleFont>
            <Possible>{info.basicInfo.canStudy ? '가능' : '불가능'}</Possible>
          </CafeStudyPossibleContainer>
          {memberId !== null && (
            <LongButtonContainer>
              {info.basicInfo.canStudy && (
                <LongButton
                  message="카공 그룹 생성하기"
                  color="black"
                  onClick={CreateGroup}
                />
              )}

              <LongButton
                message="리뷰 작성하기"
                color="red"
                onClick={review}
              />
            </LongButtonContainer>
          )}
        </CafeInfoContainer>
      </Container>
      <Sidebar buttonColors={['white', ,]} />
      <Header />
      {isReviewModalOpen && <Review />}
      {isStudyModalOpen && <Study />}
      {isDeleteModalOpen && <Delete />}
    </Screen>
  );
};

export default CafeInfo;
