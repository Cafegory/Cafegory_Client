import styled from 'styled-components';

import DatePicker from 'react-datepicker';

export const Title = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;

export const DetailName = styled.div`
  font-size: 1.3rem;
  font-weight: 550;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const GroupName = styled.div``;

export const InputContainer = styled.div`
  width: 17rem;
  display: flex;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 1%;

  @media (max-width: 768px) {
    width: 15rem;
  }
`;

export const InputField = styled.input`
  width: 100%;
  border: none;
  font-size: 1.1rem;
  &:focus {
    outline: none;
  }
  background-color: transparent;
`;

export const EditImg = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const Location = styled.div``;

export const CafeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1%;
`;
export const CafeImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
`;

export const CafeName = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const Date = styled.div``;

export const DateContatiner = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  width: 17rem;
  display: flex;
  align-items: center;
  padding: 1%;
  border-radius: 10px;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 15rem;
  }
`;

export const CustomDatePicker = styled(DatePicker)`
  width: 100%;
  border: none;
  &:focus {
    outline: none;
  }
  background-color: transparent;
  font-size: 1.1rem;
  caret-color: transparent;
  cursor: pointer;
`;

export const DateImg = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const Time = styled.div``;

export const Choose = styled.div`
  display: flex;
  gap: 1%;
  align-items: center;
`;

export const SelectContainer = styled.select`
  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  width: 6rem;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 1%;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 3%;
  }
`;

export const Maximum = styled.div``;

export const MaximumInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1%;
`;

export const MaximumInput = styled.input`
  width: 2.5rem;
  border: none;
  &:focus {
    outline: none;
  }
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 1%;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    padding: 3%;
  }
`;

export const CanTalk = styled.div``;

export const CanTalkButtonContainer = styled.div`
  display: flex;
  gap: 1%;
`;

export const CanTalkButton = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  width: 3rem;
  padding: 1%;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  font-size: 1.1rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
  &.selected {
    background-color: rgba(0, 0, 0, 0.5);
  }
  &:active {
    background-color: darkgray;
  }

  @media (max-width: 768px) {
    padding: 2.5%;
  }
`;

export const Warning = styled.span`
  color: red;
  font-size: 0.9rem;
`;

export const MemberManagement = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileImg = styled.img`
  background-color: #f2f2f2;
  border-radius: 50px;
  padding: 1%;
  width: 2.5rem;
  height: 2.5rem;
`;

export const ManagementContainer = styled.div`
  display: flex;
  gap: 1%;
  padding: 2%;
  align-items: center;
`;

export const MemberDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const MemberName = styled.div`
  font-size: 1.3rem;
  font-weight: 550;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const MemberPart = styled.div`
  font-size: 1.2rem;
  color: gray;
`;

export const Underline = styled.div`
  border-bottom: 3px solid #f2f2f2;
`;

export const ManagementIcon = styled.img`
  height: 2rem;
  margin-left: auto;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 53rem;

  @media (max-width: 768px) {
    height: 40rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 15rem;
  padding: 4%;

  @media (max-width: 768px) {
    padding: 0%;
    height: 12rem;
  }
`;

export const ContainerDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 100%;
  justify-content: space-around;

  @media (max-width: 768px) {
    height: auto;
  }
`;
