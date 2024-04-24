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
  State,
  QuestionModify,
  QuestionDelete,
  AnswerModify,
  AnswerDelete,
} from './CafeMeetingInfoPage.style';
import LongButton from 'components/LongButton';
import ShortButton from 'components/ShortButton';
import { useParams } from 'react-router-dom';
import { createQuestion, createAnswer } from './CafeMeetingInfoPage.hook';
import { cafeMeetingInfoApiStore } from './CafeMeetingInfoPage.hook';
import { cafeInfoApiStore } from 'pages/CafeInfoPage/CafeInfo.hooks';

const CafeMeetingInfo: React.FC = () => {
  const { question, setQuestion } = createQuestion();
  const { answer, setAnswer } = createAnswer();

  const { info, fetchInfo } = cafeMeetingInfoApiStore();

  const { studyOnceId } = useParams<{ studyOnceId: string }>();

  React.useEffect(() => {
    fetchInfo(studyOnceId);
  }, []);

  const { info: cafeInfo, fetchInfo: cafeFetchInfo } = cafeInfoApiStore();

  React.useEffect(() => {
    cafeFetchInfo(info.cafeId);
  }, []);

  const formatDate = (dateTimeString) => {
    const [date, time] = dateTimeString.split('T');
    const [year, month, day] = date.split('-');
    const [hour, minute] = time.split(':');
    return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;
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

  const QuestGenerateOnClick = () => {};

  const ReplyGenerateOnClick = () => {};
  return (
    <Screen>
      <Container>
        <CafeMeetingInfoContainer>
          <MeetingNameContainer>
            <MeetingNameFont>{info.name}</MeetingNameFont>
            <AddressFont>{cafeInfo.basicInfo.name}</AddressFont>
          </MeetingNameContainer>
          <TitleContainer>
            <TitleFont>모집 현황</TitleFont>
            {info.canJoin ? (
              <MemberCountContainer>
                <CanJoinMemberCount>
                  {info.nowMemberCount}명 / {info.maxMemberCount}명
                </CanJoinMemberCount>
                <CanJoinFont>모집중</CanJoinFont>
              </MemberCountContainer>
            ) : (
              <MemberCountContainer>
                <CannotJoinMemberCount>
                  {info.nowMemberCount}명 / {info.maxMemberCount}명
                </CannotJoinMemberCount>
                <CannotJoinFont>모집 마감</CannotJoinFont>
              </MemberCountContainer>
            )}
          </TitleContainer>
          <TitleContainer>
            <TitleFont>시간</TitleFont>
            <GrayFont>
              {formatDate(info.startDateTime)} ~ {formatDate(info.endDateTime)}
            </GrayFont>
          </TitleContainer>
          <TitleContainer>
            <TitleFont>구성원 간 소통 여부</TitleFont>
            {info.canTalk ? (
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
              <ShortButton
                color="black"
                message="작성"
                onClick={QuestGenerateOnClick}
              />
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
                    {qnaApi.questions[index].questionInfo.content}{' '}
                    <State>
                      <QuestionModify>수정</QuestionModify>|
                      <QuestionDelete>삭제</QuestionDelete>
                    </State>
                  </QuestionContentFont>
                </QuestionBox>
                <ReplyBox>
                  <div>↳</div>
                  <div>{qnaApi.questions[index].reply.content}</div>
                  <State>
                    <AnswerModify>수정</AnswerModify>|
                    <AnswerDelete>삭제</AnswerDelete>
                  </State>
                </ReplyBox>
                <QuestGenerate>
                  <QuestInput placeholder="답글을 작성해주세요." />
                  <ShortButton
                    color="black"
                    message="작성"
                    onClick={ReplyGenerateOnClick}
                  />
                </QuestGenerate>
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
