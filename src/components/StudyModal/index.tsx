import React from 'react';
import {
  StudyModal,
  ModalBackdrop,
  TitleContainer,
  TitleFont,
  CloseButton,
  StudyBox,
  StudyName,
  StudyDate,
  StudyBoxContainer,
  DetailButton,
  IsEndFalse,
  IsEndTrue,
  IsEndContainer,
} from './StudyModal.style';
import { studyUseStore } from './StudyModal.hooks';

const Study: React.FC = () => {
  const toggleStudyModal = studyUseStore((state) => state.toggleStudyModal);

  const closeModal = () => {
    toggleStudyModal();
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

  return (
    <>
      <StudyModal>
        <TitleContainer>
          <TitleFont>전체 카공 모임 {api.meetings.length}건</TitleFont>
          <CloseButton onClick={closeModal}>닫기</CloseButton>
        </TitleContainer>
        <StudyBoxContainer>
          {api.meetings.map((meeting, index) => (
            <StudyBox>
              <StudyName>{api.meetings[index].name}</StudyName>
              <IsEndContainer>
                {api.meetings[index].isEnd ? (
                  <>
                    <IsEndTrue>
                      {api.meetings[index].nowMemberCount}/
                      {api.meetings[index].maxMemberCount}
                    </IsEndTrue>
                    <IsEndTrue>모집중</IsEndTrue>
                  </>
                ) : (
                  <>
                    <IsEndFalse>
                      {api.meetings[index].nowMemberCount}/
                      {api.meetings[index].maxMemberCount}
                    </IsEndFalse>
                    <IsEndFalse>모집 마감</IsEndFalse>
                  </>
                )}
              </IsEndContainer>
              <StudyDate>
                {api.meetings[index].startDateTime}~
                {api.meetings[index].endDateTime}
              </StudyDate>
              <DetailButton>상세 정보</DetailButton>
            </StudyBox>
          ))}
        </StudyBoxContainer>
      </StudyModal>
      <ModalBackdrop onClick={closeModal}></ModalBackdrop>
    </>
  );
};

export default Study;
