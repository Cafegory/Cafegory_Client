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
import { cafeInfoApiStore } from 'pages/CafeInfoPage/CafeInfo.hooks';
import { useParams, useNavigate } from 'react-router-dom';

const Study: React.FC = () => {
  const navigate = useNavigate();

  const toggleStudyModal = studyUseStore((state) => state.toggleStudyModal);

  const closeModal = () => {
    toggleStudyModal();
  };

  const { info, fetchInfo } = cafeInfoApiStore();

  const { cafeId } = useParams<{ cafeId: string }>();

  React.useEffect(() => {
    fetchInfo(cafeId);
  }, [cafeId]);

  const formatDate = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const year = dateTime.getFullYear();
    const month = String(dateTime.getMonth() + 1).padStart(2, '0');
    const day = String(dateTime.getDate()).padStart(2, '0');
    const hour = String(dateTime.getHours()).padStart(2, '0');
    const minute = String(dateTime.getMinutes()).padStart(2, '0');

    return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;
  };
  console.log(info);

  return (
    <>
      <StudyModal>
        <TitleContainer>
          <TitleFont>전체 카공 모임 {info.meetings.length}건</TitleFont>
          <CloseButton onClick={closeModal}>닫기</CloseButton>
        </TitleContainer>
        <StudyBoxContainer>
          {info.meetings.map((meeting, index) => (
            <StudyBox>
              <StudyName>{info.meetings[index].name}</StudyName>
              <IsEndContainer>
                {info.meetings[index].end ? (
                  <>
                    <IsEndFalse>
                      {info.meetings[index].nowMemberCount}/
                      {info.meetings[index].maxMemberCount}
                    </IsEndFalse>
                    <IsEndFalse>모집 마감</IsEndFalse>
                  </>
                ) : (
                  <>
                    <IsEndTrue>
                      {info.meetings[index].nowMemberCount}/
                      {info.meetings[index].maxMemberCount}
                    </IsEndTrue>
                    <IsEndTrue>모집중</IsEndTrue>
                  </>
                )}
              </IsEndContainer>
              <StudyDate>
                {formatDate(meeting.startDateTime)} ~{' '}
                {formatDate(meeting.endDateTime)}
              </StudyDate>
              <DetailButton
                onClick={() => {
                  navigate(`/cafeMeetingInfo/${meeting.studyOnceId}`);
                }}
              >
                상세 정보
              </DetailButton>
            </StudyBox>
          ))}
        </StudyBoxContainer>
      </StudyModal>
      <ModalBackdrop onClick={closeModal}></ModalBackdrop>
    </>
  );
};

export default Study;
