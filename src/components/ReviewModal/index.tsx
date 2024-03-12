import React from 'react';
import {
  ReviewModal,
  ModalBackdrop,
  TitleContainer,
  ReviewsBox,
  ProfileImg,
  ReviewsUpContainer,
  ReviewsContentContainer,
  StarImg,
  ReviewsUserContainer,
  RateContainer,
  TitleFont,
  CloseButton,
  ReviewBoxContainer,
} from './ReviewModal.style';
import { reviewUseStore } from './ReviewModal.hooks';

const Review: React.FC = () => {
  const toggleReviewModal = reviewUseStore((state) => state.toggleReviewModal);

  const closeModal = () => {
    toggleReviewModal();
  };

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
          '깔끔하고 친절해용!ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
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
        rate: 1,
        content: '깔끔하고 친절해용!ddddddddddddddddd',
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

  return (
    <>
      <ReviewModal>
        <TitleContainer>
          <TitleFont>전체 리뷰 {api.reviews.length}건</TitleFont>
          <CloseButton onClick={closeModal}>닫기</CloseButton>
        </TitleContainer>
        <ReviewBoxContainer>
          {api.reviews.map((review, index) => (
            <ReviewsBox>
              <ReviewsUpContainer>
                <ReviewsUserContainer>
                  <ProfileImg src="/assets/profile-image.png" alt="프사" />
                  {api.reviews[index].writer.name}(
                  {api.reviews[index].writer.id})
                </ReviewsUserContainer>
                <RateContainer>
                  {[...Array(api.reviews[index].rate)].map(() => (
                    <StarImg src="/assets/star-icon.png" alt="별 아이콘" />
                  ))}
                </RateContainer>
              </ReviewsUpContainer>

              <ReviewsContentContainer>
                {api.reviews[index].content}
              </ReviewsContentContainer>
            </ReviewsBox>
          ))}
        </ReviewBoxContainer>
      </ReviewModal>
      <ModalBackdrop onClick={closeModal}></ModalBackdrop>
    </>
  );
};

export default Review;
