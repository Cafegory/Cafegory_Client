import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Screen from 'components/Basic/Screen';
import Container from 'components/Basic/Container';
import QnaEditModal from 'components/QnaEditModal';
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
import {
  createQuestion,
  createAnswer,
  cafeMeetingInfoApiStore,
  questionApiStore,
  answerApiStore,
} from './CafeMeetingInfoPage.hook';
import { cafeInfoApiStore } from 'pages/CafeInfoPage/CafeInfo.hooks';
import { qnaApiStore } from './CafeMeetingInfoPage.hook';
import { joinApiStore } from './CafeMeetingInfoPage.hook';
import { QnaEditModalStore } from 'components/QnaEditModal/QnaEditModal.hooks';
import { QnaEditApiState } from 'components/QnaEditModal/QnaEditModal.hooks';

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

  const { qna, fetchQna } = qnaApiStore();

  React.useEffect(() => {
    fetchQna(studyOnceId);
  }, []);

  const { joinCafeMeeting, cancelJoin } = joinApiStore();

  const formatDate = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const year = dateTime.getFullYear();
    const month = String(dateTime.getMonth() + 1).padStart(2, '0');
    const day = String(dateTime.getDate()).padStart(2, '0');
    const hour = String(dateTime.getHours()).padStart(2, '0');
    const minute = String(dateTime.getMinutes()).padStart(2, '0');

    return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;
  };

  const memberId = JSON.parse(localStorage.getItem('memberId'));

  const hi = () => {};

  const { setQuestionContent, postQuestion, deleteQuestion } =
    questionApiStore();

  const QuestGenerateOnClick = () => {
    postQuestion(Number(studyOnceId));
    setQuestionContent('');
    window.location.reload();
  };

  const handleDeleteQuestion = (id) => {
    deleteQuestion(id);
    window.location.reload();
  };

  const { setAnswerContent, postAnswer, deleteAnswer } = answerApiStore();

  const ReplyGenerateOnClick = (parrentCommentId) => {
    postAnswer(Number(studyOnceId), parrentCommentId);
    setAnswerContent('');
    window.location.reload();
  };

  const handleDeleteAnswer = (id) => {
    deleteAnswer(id);
    window.location.reload();
  };

  const isModalOpen = QnaEditModalStore((state) => state.isModalOpen);
  const toggleModal = QnaEditModalStore((state) => state.toggleModal);

  const { setEditContent } = QnaEditApiState();

  const editAnswer = (content) => {
    setEditContent(content);
    toggleModal();
  };

  const editQuestion = (content) => {
    setEditContent(content);
    toggleModal();
  };

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
            <GrayFont>{info.openChatUrl}</GrayFont>
          </TitleContainer>
          <ButtonContainer>
            {memberId === info.creatorId && (
              <LongButton
                message="그룹 정보 수정"
                onClick={hi}
                color="black"
              ></LongButton>
            )}
            {!info.attendance && (
              <LongButton
                message="카공 참여하기"
                onClick={() => {
                  joinCafeMeeting(info.studyOnceId);
                }}
                color="black"
              ></LongButton>
            )}
            {info.attendance && memberId !== info.creatorId && (
              <LongButton
                message="카공 참여 취소"
                onClick={() => {
                  cancelJoin(info.studyOnceId);
                }}
                color="red"
              ></LongButton>
            )}
          </ButtonContainer>
          <TitleContainer>
            <TitleFont>QnA</TitleFont>
            {memberId !== qna.replyWriter.memberId && (
              <QuestGenerate>
                <QuestInput
                  placeholder="궁금한 점이 있나요?"
                  onChange={(e) => setQuestionContent(e.target.value)}
                />
                <ShortButton
                  color="black"
                  message="작성"
                  onClick={QuestGenerateOnClick}
                />
              </QuestGenerate>
            )}
            {qna.comments.map((question, index) => (
              <QuestionBoxContainer>
                <QuestionBox>
                  <QuestionBoxUser>
                    <ProfileImg
                      src={qna.comments[index].questionWriter.thumbnailImg}
                      alt="프로필 사진"
                    ></ProfileImg>
                    <UserNameFont>
                      {qna.comments[index].questionWriter.name}
                    </UserNameFont>
                  </QuestionBoxUser>
                  <QuestionContentFont>
                    {qna.comments[index].questionInfo.comment}
                    {memberId ===
                      qna.comments[index].questionWriter.memberId && (
                      <State>
                        <QuestionModify
                          onClick={() => {
                            editQuestion(
                              qna.comments[index].questionInfo.comment,
                            );
                          }}
                        >
                          수정
                        </QuestionModify>
                        |
                        <QuestionDelete
                          onClick={() =>
                            handleDeleteQuestion(
                              qna.comments[index].questionInfo.commentId,
                            )
                          }
                        >
                          삭제
                        </QuestionDelete>
                      </State>
                    )}
                  </QuestionContentFont>
                </QuestionBox>
                {qna.comments[index].replies.length !== 0 && (
                  <ReplyBox>
                    <div>↳</div>
                    <QuestionBoxUser>
                      <ProfileImg
                        src={qna.replyWriter.thumbnailImg}
                        alt="프로필 사진"
                      ></ProfileImg>
                      <UserNameFont>{qna.replyWriter.name}</UserNameFont>
                    </QuestionBoxUser>
                    <div>{qna.comments[index].replies[0].comment}</div>
                    {memberId === qna.replyWriter.memberId && (
                      <State>
                        <AnswerModify
                          onClick={() => {
                            editAnswer(qna.comments[index].replies[0].comment);
                          }}
                        >
                          수정
                        </AnswerModify>
                        |
                        <AnswerDelete
                          onClick={() =>
                            handleDeleteAnswer(
                              qna.comments[index].replies[0].commentId,
                            )
                          }
                        >
                          삭제
                        </AnswerDelete>
                      </State>
                    )}
                  </ReplyBox>
                )}
                {memberId === qna.replyWriter.memberId &&
                  qna.comments[index].replies.length === 0 && (
                    <QuestGenerate>
                      <QuestInput
                        placeholder="답글을 작성해주세요."
                        onChange={(e) => setAnswerContent(e.target.value)}
                      />
                      <ShortButton
                        color="black"
                        message="작성"
                        onClick={() =>
                          ReplyGenerateOnClick(
                            qna.comments[index].questionInfo.commentId,
                          )
                        }
                      />
                    </QuestGenerate>
                  )}
              </QuestionBoxContainer>
            ))}
          </TitleContainer>
        </CafeMeetingInfoContainer>
      </Container>
      <Sidebar buttonColors={[, 'white']} />
      <Header />
      {isModalOpen && <QnaEditModal></QnaEditModal>}
    </Screen>
  );
};

export default CafeMeetingInfo;
