import styled from 'styled-components';

export const CafeMeetingInfoContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 5rem;
`;

export const MeetingNameContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
`;

export const MeetingNameFont = styled.div`
  font-size: 1.55rem;
  font-weight: 550;
  width: 100%;
`;

export const AddressFont = styled.div`
  font-size: 1rem;
  width: 100%;
  color: gray;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TitleFont = styled.div`
  font-size: 1.6rem;
  font-weight: 550;
  width: 100%;
`;

export const MemberCountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CanJoinMemberCount = styled.div`
  font-size: 1.2rem;
  font-weight: 550;
  color: black;
  width: fit-content;
`;

export const CanJoinFont = styled.div`
  font-size: 1.2rem;
  font-weight: 550;
  color: #52ff00;
  background-color: black;
  width: fit-content;
  padding: 0.2rem 0.5rem 0.2rem 0.5rem;
  border-radius: 10px;
`;

export const CannotJoinMemberCount = styled.div`
  font-size: 1.2rem;
  font-weight: 550;
  color: red;
  width: fit-content;
`;

export const CannotJoinFont = styled.div`
  font-size: 1.2rem;
  font-weight: 550;
  color: red;
  background-color: black;
  width: fit-content;
  padding: 0.2rem 0.5rem 0.2rem 0.5rem;
  border-radius: 10px;
`;

export const GrayFont = styled.div`
  width: 100%;
  color: gray;
  font-size: 1.2rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const QuestionBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
export const QuestionBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const QuestionBoxUser = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ProfileImg = styled.img`
  width: 1.2rem;
  height: 1.2rem;
`;

export const UserNameFont = styled.div`
  color: gray;
  font-size: 1.2rem;
`;
export const QuestionContentFont = styled.div`
  font-size: 1.1rem;
  display: flex;
  gap: 1rem;
`;

export const ReplyBox = styled.div`
  font-size: 1.1rem;
  display: flex;
  gap: 1rem;
`;

export const QuestGenerate = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const QuestInput = styled.input`
  padding: 1%;
  border-radius: 10px;
  width: 100%;
  &:focus {
    outline: none;
  }
  border: none;
  border: 1px solid #ccc;
  &::placeholder {
    font-size: 1rem;
  }
  font-size: 1rem;
`;

export const State = styled.div`
  display: flex;
  gap: 0.2rem;
  font-size: 0.8rem;
  align-items: center;
`;

export const QuestionModify = styled.div`
  cursor: pointer;
`;

export const QuestionDelete = styled.div`
  cursor: pointer;
`;

export const AnswerModify = styled.div`
  cursor: pointer;
`;

export const AnswerDelete = styled.div`
  cursor: pointer;
`;

export const Reply = styled.div`
  cursor: pointer;
  font-size: 0.8rem;
`;

export const ReplyContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const ReplyInput = styled.input`
  width: 100%;
  &:focus {
    outline: none;
  }
  border: none;
  border: 1px solid #ccc;
  border-radius: 10px;
  &::placeholder {
    font-size: 1rem;
  }
  padding: 1%;
`;
