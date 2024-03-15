import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Screen from 'components/Basic/Screen';
import Container from 'components/Basic/Container';
import {
  CafeMeetingInfoContainer,
  MeetingNameContainer,
  MeetingNameFont,
  AddressFont,
  TitleFont,
  CanJoinFont,
  CanJoinMemberCount,
  MemberCountContainer,
  TitleContainer,
  CannotJoinFont,
  CannotJoinMemberCount,
  GrayFont,
  ButtonContainer,
  QuestionBoxContainer,
  QuestionBox,
  ProfileImg,
  QuestionBoxUser,
  UserNameFont,
  QuestionContentFont,
  ReplyBox,
  QuestGenerate,
  QuestInput,
} from './CafeMeetingInfoPage.style';
import LongButton from 'components/LongButton';
import ShortButton from 'components/ShortButton';

const CafeMeetingInfo: React.FC = () => {
  const api = {
    cafeId: 1,
    id: 1,
    name: '알아서 공부하자',
    startDateTime: 'yyyy-MM-ddThh:mm:ss',
    endDateTime: 'yyyy-MM-ddThh:mm:ss',
    maxMemberCount: 7,
    nowMemberCount: 3,
    canTalk: true,
    canJoin: true,
    isEnd: false,
  };

  const qnaApi = {
    replyWriter: {
      memberId: 2,
    },
    questions: [
      {
        questionWriter: {
          memberId: 1,
          name: '취준생',
          thumbnailImg: 'https://~~',
        },
        questionInfo: {
          questionId: 1,
          content: '조금 늦어도 될까요?',
        },
        reply: {
          replyId: 1,
          content: '아니요! 웬만하면 정시에 시작하려고 합니다',
        },
      },
      {
        questionWriter: {
          memberId: 1,
          name: '취준생',
          thumbnailImg: 'https://~~',
        },
        questionInfo: {
          questionId: 1,
          content: '조금 늦어도 될까요?',
        },
        reply: {
          replyId: 1,
          content: '아니요! 웬만하면 정시에 시작하려고 합니다',
        },
      },
    ],
  };

  const hi = () => {};

  return (
    <Screen>
      <Container>
        <CafeMeetingInfoContainer>
          <MeetingNameContainer>
            <MeetingNameFont>{api.name}</MeetingNameFont>
            <AddressFont>스타벅스 강남R점</AddressFont>
          </MeetingNameContainer>
          <TitleContainer>
            <TitleFont>모집 현황</TitleFont>
            {api.canJoin ? (
              <MemberCountContainer>
                <CanJoinMemberCount>
                  {api.nowMemberCount}명 / {api.maxMemberCount}명
                </CanJoinMemberCount>
                <CanJoinFont>모집중</CanJoinFont>
              </MemberCountContainer>
            ) : (
              <MemberCountContainer>
                <CannotJoinMemberCount>
                  {api.nowMemberCount}명 / {api.maxMemberCount}명
                </CannotJoinMemberCount>
                <CannotJoinFont>모집 마감</CannotJoinFont>
              </MemberCountContainer>
            )}
          </TitleContainer>
          <TitleContainer>
            <TitleFont>시간</TitleFont>
            <GrayFont>
              {api.startDateTime}~{api.endDateTime}
            </GrayFont>
          </TitleContainer>
          <TitleContainer>
            <TitleFont>구성원 간 소통 여부</TitleFont>
            {api.canTalk ? (
              <GrayFont>가능</GrayFont>
            ) : (
              <GrayFont>불가능</GrayFont>
            )}
          </TitleContainer>
          <TitleContainer>
            <TitleFont>오픈 채팅방 주소</TitleFont>
            <GrayFont>오픈 채팅방 주소</GrayFont>
          </TitleContainer>
          <ButtonContainer>
            <LongButton
              message="그룹 정보 수정"
              onClick={hi}
              color="black"
            ></LongButton>
            <LongButton
              message="모집 마감"
              onClick={hi}
              color="red"
            ></LongButton>
          </ButtonContainer>
          <TitleContainer>
            <TitleFont>QnA</TitleFont>
            <QuestGenerate>
              <QuestInput placeholder="궁금한 점이 있나요?" />
              <ShortButton color="black" message="생성" />
            </QuestGenerate>
            {qnaApi.questions.map((question, index) => (
              <QuestionBoxContainer>
                <QuestionBox>
                  <QuestionBoxUser>
                    <ProfileImg
                      src={qnaApi.questions[index].questionWriter.thumbnailImg}
                      alt="프로필 사진"
                    ></ProfileImg>
                    <UserNameFont>
                      {qnaApi.questions[index].questionWriter.name}
                    </UserNameFont>
                  </QuestionBoxUser>
                  <QuestionContentFont>
                    {qnaApi.questions[index].questionInfo.content}
                  </QuestionContentFont>
                </QuestionBox>
                <ReplyBox>
                  <div>↳</div>
                  <div>{qnaApi.questions[index].reply.content}</div>
                </ReplyBox>
              </QuestionBoxContainer>
            ))}
          </TitleContainer>
        </CafeMeetingInfoContainer>
      </Container>
      <Sidebar buttonColors={[, 'white']} />
      <Header />
    </Screen>
  );
};

export default CafeMeetingInfo;
